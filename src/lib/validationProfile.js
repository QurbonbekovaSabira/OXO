import { z } from "zod";
export const validationProfile = z.object({
  ticketLink: z.string().url({ message: "Bunday rasm mavjud emas" }),
  firstName: z.string().min(2, { message: "2 ta harfdan kam" }),
  location: z.string().min(4),
  email: z
    .string()
    .min(10, { message: "emailni tog'ri kiriting!" })
    .email({ message: "Bunday email mavjud emas" }),
  location: z.string(),
});
