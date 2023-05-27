import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiTags } from '@nestjs/swagger';
import { Car } from './car.entity';
import { Model } from 'src/model/model.entity';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { ModelService } from 'src/model/model.service';
import { Damage } from 'src/damage/damage.entity';
import { DamageModule } from 'src/damage/damage.module';
import { DamageService } from 'src/damage/damage.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Car, Model, Damage]), 
  ],
  controllers: [CarController],
  providers: [CarService, ModelService, DamageService],
})
@ApiTags('Car')
export class CarModule {}
