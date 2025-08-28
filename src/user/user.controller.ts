import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDto } from './user-dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

  constructor(private readonly service: UserService) {
  }

  @Post()
  async create(@Body() user: UserDto): Promise<UserDto> {
    return this.service.create(user);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user: UserDto): Promise<UserDto> {
    return this.service.update(id, user);
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<UserDto> {
    return this.service.findById(id);
  }

  @Get()
  async findAll(): Promise<UserDto[]> {
    return this.service.findAll();
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.service.delete(id);
  }
}