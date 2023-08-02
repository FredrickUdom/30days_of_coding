import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, HydratedDocument } from 'mongoose';
import { User } from './schema.user';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop()
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref: User
    }
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    image: string;

    @Prop()
    price: string;

    @Prop()
    createdAt:{
        type:Date,
        default: Date
    }
}

export const ProductSchema = SchemaFactory.createForClass(Product);