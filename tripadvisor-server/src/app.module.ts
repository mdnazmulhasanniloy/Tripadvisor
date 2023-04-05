import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config/dist';
import { MongooseModule } from '@nestjs/mongoose';
import { PackageModule } from './package/package.module';

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: [".local.env"]
    }),

    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      useFactory: (configService: ConfigService)=>({uri: configService.get("DB_URI")}),
      inject: [ConfigService]
    }),

    PackageModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
