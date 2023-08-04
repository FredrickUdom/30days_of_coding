import { Module } from '@nestjs/common';
import { UserController } from 'src/common/controllers/user/user.controller';
import { UserService } from 'src/common/services/user/user.service';

@Module({
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}
