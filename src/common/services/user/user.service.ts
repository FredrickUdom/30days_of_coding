import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/common/models/schema.user';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private catModel: Model<User>) {}

    async createUser(user){

    }

}
