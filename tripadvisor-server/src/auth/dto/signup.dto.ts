
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';


export class SignupDto{
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly img: string;

    @IsNotEmpty()
    @IsString()
    readonly role: string;

    @IsNotEmpty()
    @IsEmail({}, {message: "Please enter a valid email"})
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password: string;
}