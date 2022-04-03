import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  nome: string;

  @Prop({ unique: true })
  email: string;

  @Exclude()
  password: string;

  // constructor(partial: Partial<User>) {
  //   Object.assign(this, partial);
  // }
}

export const UserSchema = SchemaFactory.createForClass(User);
