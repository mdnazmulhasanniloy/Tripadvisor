import { Place, Restaurant, Hotel } from "../schema/Package";

export class CreatePackageDto {
    name: string;
    img: string;
    duration: Date;
    numberOfPeople: number;
    place: Place;
    hotel: Hotel;
    restaurant: Restaurant;
}
