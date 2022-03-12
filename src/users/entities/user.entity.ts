import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  nome: string;

  @Prop()
  email: string;

  @Prop()
  telefone: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
