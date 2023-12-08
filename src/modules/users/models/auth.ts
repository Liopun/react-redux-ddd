import { boolean, object, string, TypeOf } from 'zod';

export interface ICodingLangsOption {
    value: string;
    label: string;
}

export const signinSchema = object({
    username: string().trim().min(1, 'Username is required'),
    password: string()
        .min(1, 'Password is required')
        .min(8, 'Password must be more than 8 characters')
        .max(32, 'Password must be less than 32 characters'),
    rememberMe: boolean().optional(),
});

export const signupSchema = object({
    email: string().email('Email is invalid').trim().min(1, 'Email is required'),
    password: string()
        .min(1, 'Password is required')
        .min(8, 'Password must be more than 8 characters')
        .max(32, 'Password must be less than 32 characters'),
    passwordConfirm: string().min(1, 'Password confirmation is required'),
}).refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Passwords do not match',
});

// Infer ts type from zod schema
export type ISignin = TypeOf<typeof signinSchema>;
export type ISignup = TypeOf<typeof signupSchema>;