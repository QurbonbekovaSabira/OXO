import { z } from "zod";

export const validationProductData = z.object({
  title: z.string().min(5, { message: "Ism 5 harfdan kam" }),
  img: z.string().url({ message: "Bunday rasm mavjud emas" }),
  desc: z
    .string()
    .min(80, { message: "Tavsiv 80 harfdan kam" })
    .max(9000, { message: "Harflar 9000 dan ko'p" }),
  location: z.string().min(5, { message: "min 5" }),
  clientName: z.string().min(2, { message: "min 4" }),
  email: z
    .string()
    .min(10, { message: "emailni tog'ri kiriting!" })
    .email({ message: "Bunday email mavjud emas" }),
  phone: z.string().min(8, { message: "raqam notog'ri" }),
});
