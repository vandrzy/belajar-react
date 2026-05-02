
export type UserResponse = {
    success: boolean;
    timestamps: string;
    message: string;
    data: {
        username: string;
        email: string;
        role: string;
    }
} 