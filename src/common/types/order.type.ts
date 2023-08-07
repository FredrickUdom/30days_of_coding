import { Document } from "mongoose";
import { Iuser } from "./user.type";
import { Iproduct } from "./product.type";

interface productOrder{
    product:Iproduct,
    quantity: number
}
export interface Iorder extends Document{
    owner:Iuser;
    totalPrice: number;
    products: productOrder[];
    createdAt: Date;
}