import { AbstractEntity } from '../config/abstract.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'login',
    type: 'varchar',
    length: 50,
    unique: true,
    nullable: false
  })
  login: string;


  @Column({
    name: 'password',
    type: 'varchar',
    length: 255,
    nullable: false
  })
  password: string;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 150,
    nullable: false
  })
  name: string;
}