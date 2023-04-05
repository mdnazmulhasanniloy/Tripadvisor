import { Injectable } from '@nestjs/common';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { model, Model } from 'mongoose';
import { InjectModel } from '@nestjs/sequelize';
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
      model.place=createPackageDto.place;
      model.hotel=createPackageDto.hotel;
      model.restaurant=createPackageDto.restaurant;

    return model.save( );
  }

  findAll() {
    return `This action returns all package`;
  }

  findOne(id: number) {
    return `This action returns a #${id} package`;
  }

  update(id: number, updatePackageDto: UpdatePackageDto) {
    return `This action updates a #${id} package`;
  }

  remove(id: number) {
    return `This action removes a #${id} package`;
  }
}
