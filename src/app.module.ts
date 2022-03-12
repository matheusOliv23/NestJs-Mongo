import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { env } from 'process';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   isGlobal: true,
    // }), // process.env.xxx must be called after this line
    MongooseModule.forRoot(
      'mongodb+srv://crud_api:gtzKulEIj9aHYfaS@blog.7eayp.mongodb.net/test',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
