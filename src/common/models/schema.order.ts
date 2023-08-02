import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from './schema.user';
import { Product } from './schema.product';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop()
  owner:{
      type:mongoose.Schema.Types.ObjectId,
      ref: User
  }
  @Prop()
  totalPrice:{
    type: number,
    default: 0
  }

  @Prop()
  products:[
    {
      product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Product
      }

      quanttity:{
        type: number,
        default: 0
      }
    }
  ]

  @Prop()
  createdAt:{
      type:Date,
      default: Date
  }

 
}

export const OrderSchema = SchemaFactory.createForClass(Order);