import { z } from "zod";

export const validationLogin = z
  .object({
    email: z
      .string()
      .min(10, { message: "email is required" })
      .email({ message: "Must be a valid email" }),
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
