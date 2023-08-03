import { Module } from '@nestjs/common';
import { SharedService } from '../services/shared.service';
import { SharedController } from '../controllers/shared.controller';

@Module({
  providers: [SharedService],
  controllers: [SharedController]
})
export class SharedModule {}
