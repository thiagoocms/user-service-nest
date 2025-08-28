import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class UserDto {

  @IsOptional()
  id: number;

  @IsNotEmpty({ message: 'O campo login não pode ser vazio' })
  login: string;

  @IsNotEmpty({ message: 'O campo senha não pode ser vazio' })
  @MinLength(5, { message: 'O campo senha tem que ter no minimo 5 caracteres' })
  password: string;

  @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
  name: string;
}