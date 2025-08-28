import { Injectable } from '@nestjs/common';
import { UserEntity } from './user-entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UserRepository extends Repository<UserEntity>{

  constructor(private readonly dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  async findAll(): Promise<UserEntity[]> {
    return this.find();
  }

  async findById(id: number): Promise<UserEntity | null> {
    return this.findOneBy({
      id: id
    })
  }

}