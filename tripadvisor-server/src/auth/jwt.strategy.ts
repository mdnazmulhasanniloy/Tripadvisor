import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import {Strategy, ExtractJwt} from 'passport-jwt';
import { User } from './schemas/user.schema';
import { UnauthorizedException } from '@nestjs/common/exceptions';



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.ACCESS_TOKEN
        })
    }

    async validate(payload){

        const {_id} = payload;
        
        
        const user = await this.userModel.findById({_id });
         if(!user){
            throw new UnauthorizedException('Unauthorized Access');
         }

         return user;
    }
}