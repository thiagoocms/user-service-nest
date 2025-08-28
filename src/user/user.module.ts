import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserMapper } from './user.mapper';
import { UserController } from './user.controller';
import { UserRepository } from './user-repository';
import { UserEntity } from './user-entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    UserService,
    UserMapper,
    {
      provide: UserRepository,
      useFactory: (dataSource: DataSource) => new UserRepository(dataSource),
      inject: [DataSource],
    },
  ],
})
export class UserModule {
}
