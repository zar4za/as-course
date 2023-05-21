import { Controller, Get, Post, Body } from '@nestjs/common';
import { CarService } from 'src/car/car.service';
import { CreateCarDto } from 'src/dto/create-car.dto';
import { Car } from './car.entity';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  async findAll(): Promise<Car[]> {
    return await this.carService.findAll();
  }

  @Post()
  async create(@Body() createCarDto: CreateCarDto) {
    return await this.carService.create(createCarDto);
  }
}
