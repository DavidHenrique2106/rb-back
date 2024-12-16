import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UsersService } from '../services/users.services';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Listar todos os usuários' })
  @Get('listar')
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: 'Criar um novo usuário' })
  @Post('cadastrar')
  create(@Body() createUserDto: CreateUserDto) {
    const createdUser = this.usersService.create(createUserDto);
    return createdUser; 
  }

  @ApiOperation({ summary: 'Atualizar o usuário' })
  @Put('atualizar')
  update(@Body() updateUserDto: CreateUserDto) {
    return this.usersService.update(updateUserDto);
  }

  @ApiOperation({ summary: 'Deletar um usuário' })
  @Delete('deletar/:id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
