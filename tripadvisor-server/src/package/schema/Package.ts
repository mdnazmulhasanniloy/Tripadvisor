import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";




export type PackageDocument  = Package & Document;

// place schema
@Schema()
export class Place {

    @Prop()
    place: string;
}


//hotel schema

@Schema()
export class Hotel{

    @Prop()
    hotel: string;
}

// schema 
@Schema()
export class Restaurant{

    @Prop()
    restaurant: string;
}


@Schema()
export class Package extends Document{
    @Prop()
    name: string;

    @Prop()
    img: string;
    
    @Prop()
    duration: Date;
    
    @Prop()
    numberOfPeople: number;

    @Prop({ type: Place })
    place: Place;
    
    @Prop({ type: Hotel })
    hotel: Hotel;

    @Prop({ type: Restaurant })
    restaurant: Restaurant;


    
    
}

export const PackageSchema = SchemaFactory.createForClass(Package);