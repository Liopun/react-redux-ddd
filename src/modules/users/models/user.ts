export interface User {
    id: string;
    username: string;
    country: string;
    industry: string;
    institution: string;
    bio: string;
    followersCount: number;
    followeesCount: number;
    isActivated: boolean;
    isVerified: boolean;
}