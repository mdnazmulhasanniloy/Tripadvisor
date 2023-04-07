import { Module } from '@nestjs/common';
import { PackageService } from './package.service';
import { PackageController } from './package.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Package, PackageSchema } from './schema/Package';
import { AuthModule } from './../auth/auth.module';

@Module({
  imports: [
  AuthModule,
    MongooseModule.forFeature([{name: Package.name, schema: PackageSchema}])
  ],
  controllers: [PackageController],
  providers: [PackageService]
})
export class PackageModule {}
