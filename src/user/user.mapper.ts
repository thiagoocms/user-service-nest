import { Injectable } from '@nestjs/common';
import { UserDto } from './user-dto';
import { UserEntity } from './user-entity';

@Injectable()
export class UserMapper {

  async toDto(entity: UserEntity): Promise<UserDto> {
    const dto = new UserDto();

    dto.id = entity.id;
    dto.name = entity.name;
    dto.login = entity.login;
    dto.password = entity.password;

    return dto;
  }

  async toEntity(dto: UserDto): Promise<UserEntity> {
    const entity = new UserEntity();

    entity.name = dto.name;
    entity.login = dto.login;
    entity.password = dto.password;

    return entity;
  }
}