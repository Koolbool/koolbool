export interface User {
    uType: number;
    displayName: string;
    email: string;
    phoneNumber: string;
    photoURL: string;
    children?: string[];
    groups?: [];
}
