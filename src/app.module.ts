import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI, {}),
    AuthModule,
    UsersModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
