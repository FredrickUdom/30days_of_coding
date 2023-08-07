import { Document } from "mongoose";

interface Address{
    addr1: string;
    addr2?: string;
    city: string;
    zip: number;
    state: string;
    country: string
}
export interface Iuser extends Document{
    readonly firstName: string;

    readonly lastName: string;

    readonly email: string;

    readonly password: string;

    readonly seller:boolean;

    readonly address: Address;

    readonly createdAt: Date;
}