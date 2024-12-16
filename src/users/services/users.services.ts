import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class UsersService {
  private users = [];

  findAll() {
    return this.users;
  }

  create(createUserDto: CreateUserDto) {
    const newUser = {
      id: Date.now().toString(),
      ...createUserDto, 
    };
    this.users.push(newUser);
    return newUser;
  }

  update(updateUserDto: CreateUserDto) {
    const index = this.users.findIndex(u => u.name === updateUserDto.name);
    if (index === -1) {
      throw new Error('Usuário não encontrado');
    }
    this.users[index] = { ...this.users[index], ...updateUserDto };
    return this.users[index];
  }

  delete(id: string) {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) {
      throw new Error('Usuário não encontrado');
    }
    const deletedUser = this.users.splice(index, 1);
    return deletedUser[0];
  }
}
