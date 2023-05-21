import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiTags } from '@nestjs/swagger';
import { Car } from './car.entity';
import { Model } from 'src/model/model.entity';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { ModelService } from 'src/model/model.service';

@Module({
  imports: [TypeOrmModule.forFeature([Car, Model])],
  controllers: [CarController],
  providers: [CarService, ModelService],
})
@ApiTags('Car')
export class CarModule {}
