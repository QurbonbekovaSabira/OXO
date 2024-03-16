import { z } from "zod";

export const validationSchema = z
  .object({
    ticketLink: z.string().url({ message: "not link" }),
    firstName: z.string().min(2, { message: "Ism 3 harfdan kam" }),
    lastName: z.string().min(2, { message: "Familiya 3 harfdan kam" }),
    password: z
      .string()
      .min(4, { message: "min 4" })
      .max(8, { message: "max 8" }),
    confirmPassword: z
      .string()
      .min(4, { message: "min 4" })
      .max(4, { message: "max 4" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });
