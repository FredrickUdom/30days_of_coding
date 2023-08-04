import { Module } from '@nestjs/common';
import { SharedService } from '../services/shared.service';
import { SharedController } from '../controllers/shared.controller';
import { UserModule } from './user/user.module';

@Module({
  providers: [SharedService],
  controllers: [SharedController],
  imports: [UserModule]
})
export class SharedModule {}
