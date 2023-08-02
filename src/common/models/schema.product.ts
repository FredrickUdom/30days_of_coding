import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop()
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    image: string;

    @Prop()
    price: string;

    createdAt:{
        type:Date,
        default: Date
    }
}

export const UserSchema = SchemaFactory.createForClass(Product);