export interface User {
    displayName: string;
    email: string;
    phoneNumber: string;
    photoURL: string;
    children?: string[];
    groups?: [];
    uType?: string;
}
