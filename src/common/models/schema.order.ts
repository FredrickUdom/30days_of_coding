import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  seller:{
    type:Boolean,
    default: false
  }

  @Prop()
  address:{
    address1: string,
    address2?: string,
    city: string,
    state: string,
    country: string,
    zip: number
  }

  @Prop()
  createdAt:{
    type: Date,
    default: Date
  }

  @Prop()
  email: number;

  @Prop()
  password: number;

 
}

export const OrderSchema = SchemaFactory.createForClass(Order);