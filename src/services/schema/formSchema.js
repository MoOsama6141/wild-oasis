import z from "zod";

const FormSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    maxCapacity: z.coerce.number().min(1, "Max capacity is required"),
    regularPrice: z.coerce.number().min(1, "Regular price is required"),
    discount: z.coerce.number().optional().default(0),
    description: z.string().min(1, "Description is required"),
    image: z.any().optional(),
  })
  .refine((data) => Number(data.discount) < Number(data.regularPrice), {
    message: "Discount must be less than the regular price",
    path: ["discount"],
  });

export default FormSchema;
