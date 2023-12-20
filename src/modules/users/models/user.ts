export interface User {
    id: string;
    username: string;
    location: string;
    email: string;
    firstname: string;
    lastname: string;
    bio: string;
    avatar: string;
    socialLinks: string[];
    isActivated: boolean;
}