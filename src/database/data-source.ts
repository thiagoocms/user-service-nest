import 'dotenv/config';
import { DataSource } from 'typeorm';
import * as path from 'path';
import { UserEntity } from '../user/user-entity';

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [UserEntity],
  migrations: [path.join(__dirname, '..', 'migrations', '*{.ts,.js}')],

  synchronize: false,
});
