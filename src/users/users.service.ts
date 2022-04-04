import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    const { email } = createUserDto;
    const user = await this.userModel.findOne({ email });
    if (user) {
      throw new HttpException(
        'Já existe um usuário registrado com esse email',
        HttpStatus.BAD_REQUEST,
      );
    }
    const createUser = new this.userModel(createUserDto);
    return createUser.save();
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  findAll() {
    return this.userModel.find();
  }

  async findById(id: string) {
    return await this.userModel.findById(id);
  }

  update(id: string, UpdateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: UpdateUserDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.userModel.deleteOne({
      _id: id,
    });
  }
}
