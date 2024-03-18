import { z } from "zod";

export const validationPassword = z
  .object({
    oldPassword: z
      .string()
      .min(4, { message: "min 4" })
      .max(8, { message: "max 8" }),
    password: z
      .string()
      .min(4, { message: "min 4" })
      .max(8, { message: "max 8" }),
    confirmPassword: z
      .string()
      .min(4, { message: "min 4" })
      .max(4, { message: "max 4" }),
  })
  .refine((data) => data.oldPassword !== data.password, {
    path: ["password"],
    message: "Yangi parol kiriting",
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Iltimos parolni tog'ri kiriting",
  });
