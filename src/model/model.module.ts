import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Model } from './model.entity';
import { CarModelController } from './model.controller';
import { ModelService } from './model.service';
import { ApiTags } from '@nestjs/swagger';

@Module({
  imports: [TypeOrmModule.forFeature([Model])],
  controllers: [CarModelController],
  providers: [ModelService],
})
@ApiTags('Car Model')
export class CarModelModule {}
