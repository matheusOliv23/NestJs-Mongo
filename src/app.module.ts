import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      'mongodb+srv://crud_api:gtzKulEIj9aHYfaS@blog.7eayp.mongodb.net/test',
    ),
    AuthModule,
    UsersModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
