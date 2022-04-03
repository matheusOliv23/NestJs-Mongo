import { Exclude } from 'class-transformer';

export class CreateUserDto {
  nome: string;
  email: string;
  password: string;
}
