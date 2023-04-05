import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";



export type PackageDocument  = Package & Document;

@Schema()
export class Package {
    @Prop()
    name: string;
    
    @Prop()
    duration: Date;
    
    @Prop()
    numberOfPeople: number;
    
    @Prop()
    place: string;
    
    @Prop()
    hotel: string;

    @Prop()
    restaurant: string;
}

export const PackageSchema = SchemaFactory.createForClass(Package);