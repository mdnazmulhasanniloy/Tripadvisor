import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt/dist';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { User } from './schemas/user.schema';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService
    ){}

    // user register
    async signUp(signUpDot: SignupDto): Promise<{token: string}>{
        const {name, img, role, email, password} = signUpDot;

        // password convert in  bcrypt 
        const hashedPassword = await bcrypt.hash(password, 10);
        
        //user create

        const user = await this.userModel.create({
            name,
            img,
            role,
            email,
            password: hashedPassword
        })

        const token = this.jwtService.sign({_id: user._id})
        return{token}
    }


    //user login

    async login(loginDto: LoginDto): Promise<{token:string}>{
        const {email, password} = loginDto;
        const user = await this.userModel.findOne({email: email})

        if(!user){
            throw new UnauthorizedException('Invalid Email')
        }


        const isPasswordMatch = await bcrypt.compare(password, user.password)

        if(!isPasswordMatch){
            throw new UnauthorizedException('Invalid Password')
        }

        const token = this.jwtService.sign({_id: user._id})
        return{token}
    }
}
