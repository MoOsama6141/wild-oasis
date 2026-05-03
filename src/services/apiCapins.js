import supabase, { supabaseUrl } from "./supabase";

export async function getCapins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error("Error fetching cabins:", error);
    throw new Error("there is an error in the cabins");
  }
  return data;
}

export async function deleteCabin(cabinId) {
  const { data, error } = await supabase
    .from("cabins")
    .delete()
    .eq("id", cabinId);

  if (error) {
    console.error("Error deleting cabin:", error);
    throw new Error("there is an error deleting the cabin");
  }
  return data;
}

export async function createAndUpdateCabin(cabinData, id) {
  console.log(id, "main idddddddddddd");
  console.log(cabinData, "main data");

  const hasImagePath = cabinData?.image?.startsWith?.(supabaseUrl);
  const imageName = hasImagePath
    ? null
    : `${Math.random()}-${cabinData?.image?.name}`.replaceAll("/", "");
  const imagePath = imageName ? `cabin-images/${imageName}` : null;
  const imageUrl = `${
    hasImagePath
      ? cabinData.image
      : `${supabaseUrl}/storage/v1/object/public/${imagePath}`
  }`;
  let query = supabase.from("cabins");

  if (!id) {
    query = query
      .insert([{ ...cabinData, image: imageUrl }])
      .select()
      .single();
  }
  if (id) {
    query = query
      .update({ ...cabinData, image: imageUrl })
      .eq("id", id)
      .select()
      .single();
  }
  const { data, error } = await query;
  if (error) throw new Error("Error creating cabin");

  if (!hasImagePath) {
    const { error: imageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, cabinData.image);

    if (imageError) {
      await supabase.from("cabins").delete().eq("id", data.id);
      throw new Error("Error uploading image");
    }
  }

  return data;
}
