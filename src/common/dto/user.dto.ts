import Joi, { number, string } from "joi";

export const createUserSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.number().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    address:({
        address1: string().required(),
        address2: string().optional(),
        city: string().required(),
        state: string().required(),
        country: string().required(),
        zip: number().required(),
      }),
    seller: Joi.string().required(),
  }).options({
    abortEarly: false
  })
  
  export interface CreateCatDto {
    name: string;
    age: number;
    breed: string;
  }