import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class userDto{
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
     address:({
        address1: string;
        address2?: string;
        city: string;
        state: string;
        country: string;
        zip: number;
      });

    @IsNotEmpty()
    @IsString()
    seller:{
        type:Boolean,
        default: false
    };
}