import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from 'src/common/user/user.controller';
// import { User, UserSchema } from 'src/common/models/schema.user';
import { UserService } from './user.service';


@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}
