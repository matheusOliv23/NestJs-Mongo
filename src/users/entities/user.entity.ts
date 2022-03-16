import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  nome: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  telefone: string;

  @Prop()
  cidade: string;

  @Prop()
  estado: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
