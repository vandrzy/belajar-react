import z from "zod";

export const loginSchema = z.object({
    email: z.email("Email tidak valid"),
    password: z.string().min(3).max(8)
})

export const signUpSchema = z.object({
    username: z.string(),
    email: z.email("Email tidak valid"),
    password: z.string().min(3, "minimal 3 karakter").max(8, "maksimal 8 karakter"),
    confirmPassword: z.string().min(3, "minimal 3 karakter").max(8, "maksimal 8 karakter")
}).refine(data => data.password === data.confirmPassword, {
    message: "Confirm password tidak sama dengan password",
    path: ["confirmPassword"]
})