import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { createAndUpdateCabin } from "../../services/apiCapins";
import toast from "react-hot-toast";

function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { mutate: updateCabin, isPending: isUpdating } = useMutation({
    mutationFn: ({ cabinData, cabinId }) =>
      createAndUpdateCabin(cabinData, cabinId),
    onSuccess: () => {
      toast.success("Cabin updates successfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => {
      console.error(err);
      toast.error(err?.message ?? "Error updating cabin");
    },
  });
  return { updateCabin, isUpdating };
}

export default useUpdateCabin;
