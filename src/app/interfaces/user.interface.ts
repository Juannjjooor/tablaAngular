import { Drug } from "./usuario";

export interface User {
    "id": number;
    "name": string;
    "usuario": string;
    "drugs": Drug[];
}