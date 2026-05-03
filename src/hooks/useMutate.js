import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createAndUpdateCabin } from "../services/apiCapins";

const useMutate = ({ id }) => {
  const queryClient = useQueryClient();

  const { mutate, isPending, reset } = useMutation({
    mutationFn: createAndUpdateCabin(id),
    onSuccess: () => {
      toast.success("Cabin created successfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
      //   setShowForm(false);
    },
    onError: () => {
      toast.error("Error creating cabin");
    },
  });
  return { mutate, isPending, reset };
};

export default useMutate;
