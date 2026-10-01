import { Controller } from '@nestjs/common';
import { IsEmail, isEmail, IsString, isString } from 'class-validator';

@Controller('auth')
export class CreateUserDto {

    @IsEmail()
    email: string
    @IsString()
    password: string

}