import { object, string, TypeOf } from 'zod';

export const claimUsernameSchema = object({
    username: string().trim().min(1, 'Username is required'),
});

export const updateProfileSchema = object({
    bio: string().trim().optional(),
})

export type IClaimUsername = TypeOf<typeof claimUsernameSchema>;
export type IUpdateProfileSchema = TypeOf<typeof updateProfileSchema>;