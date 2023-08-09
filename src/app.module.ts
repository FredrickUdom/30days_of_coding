import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './common/user/user.module';

const dbUrl = process.env.DB_URI || 'mongodb+srv://e_commerce:12hdb6e9wdRSwGqw@cluster0.ubyns6e.mongodb.net/';
@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: '.env',
    isGlobal: true
  }),
    MongooseModule.forRoot(dbUrl),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
