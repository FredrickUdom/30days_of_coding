import { Document } from "mongoose";
import { Iuser } from "./user.type";

export interface Iproduct extends Document{
    owner:Iuser;
    title: string;
    description: string;
    image: string;
    price: string;
    createdAt: Date;
}