import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModel } from './car-model.entity';
import { CarModelController } from './car-model.controller';
import { CarModelService } from './car-model.service';
import { ApiTags } from '@nestjs/swagger';

@Module({
  imports: [TypeOrmModule.forFeature([CarModel])],
  controllers: [CarModelController],
  providers: [CarModelService],
})
@ApiTags('Car Model')
export class CarModelModule {}
