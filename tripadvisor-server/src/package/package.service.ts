import { Injectable } from '@nestjs/common';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Package, PackageDocument } from './schema/Package'; 

@Injectable()
export class PackageService {
  constructor(@InjectModel(Package.name) private packageModel: Model<PackageDocument>){

  } 
  
  create(createPackageDto: CreatePackageDto) : Promise<Package>{

    const model = new this.packageModel();
    model.name=createPackageDto.name;
    model.duration=createPackageDto.duration;
    model.numberOfPeople=createPackageDto.numberOfPeople;
    model.place= createPackageDto.place;
    model.hotel= createPackageDto.hotel;
    model.restaurant=createPackageDto.restaurant;

    return model.save();
  }


  findAll() : Promise<Package[]> {
    return this.packageModel.find().exec();
  }

  findOne(id: string) : Promise<Package>{
    return this.packageModel.findById(id).exec();
  }

  update(id: string, updatePackageDto: UpdatePackageDto) {
    return this.packageModel.updateOne({_id: id} ,{
      name: updatePackageDto.name,
      img: updatePackageDto.img,
      duration: updatePackageDto.duration,
      numberOfPeople: updatePackageDto.numberOfPeople,
      place: updatePackageDto.place,
      hotel: updatePackageDto.hotel,
      restaurant: updatePackageDto.restaurant
      }).exec();
  }

  remove(id: string) {
    return this.packageModel.deleteOne({_id: id}).exec();
  }
}
