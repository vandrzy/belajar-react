import z from "zod";

export const blogSchema = z.object({
    title: z.string().min(1, "title wajib diisi"),
    description: z.string().min(1, "deskripsi wajib diisi")
})

export type Blog = z.infer<typeof blogSchema>;