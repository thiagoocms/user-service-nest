import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './user-dto';
import { UserEntity } from './user-entity';
import { UserMapper } from './user.mapper';
import { UserRepository } from './user-repository';

@Injectable()
export class UserService {

  constructor(private readonly mapper: UserMapper,
              private readonly repository: UserRepository) {
  }

  async create(user: UserDto): Promise<UserDto> {
    let entity = await this.mapper.toEntity(user);
    entity = await this.repository.save(entity);
    return await this.mapper.toDto(entity);
  }

  async update(id: number, user: UserDto): Promise<UserDto> {
    const entity = await this.findCheckById(id);

    entity.login = user.login ?? entity.login;
    entity.password = user.password ?? entity.password;
    entity.name = user.name ?? entity.name;
    await this.repository.update(id, entity);
    return this.mapper.toDto(entity);
  }

  async findById(id: number): Promise<UserDto> {
    const user = await this.findCheckById(id);
    return await this.mapper.toDto(user);
  }

  async findAll(): Promise<UserDto[]> {
    const list = await this.repository.findAll();
    return Promise.all(list.map(
      async user => await this.mapper.toDto(user),
    ));
  }

  async delete(id: number): Promise<void> {
    const user = await this.findCheckById(id);
    await this.repository.remove(user);
  }

  private async findCheckById(id: number): Promise<UserEntity> {
    const user = await this.repository.findById(id);

    if (!user) {
      throw new NotFoundException('Usuario não encontrado');
    }

    return user;
  }
}