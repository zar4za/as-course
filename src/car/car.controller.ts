import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CarService } from 'src/car/car.service';
import { CreateCarDto } from 'src/dto/create-car.dto';
import { Car } from './car.entity';
import { CreateDamageDto } from 'src/dto/create-damage.dto';

@Controller('cars')
export class CarController {
    constructor(private readonly carService: CarService) {}

    @Get()
    async findAll(): Promise<Car[]> {
        return await this.carService.findAll({
            relations: ['model'],
        });
    }

    @Post()
    async create(@Body() createCarDto: CreateCarDto) {
        return await this.carService.create(createCarDto);
    }

    @Post(':id/damages')
    async createDamage(@Param('id') id: number, @Body() createDamageDto: CreateDamageDto) {
        return await this.carService.createDamage(id, createDamageDto);
    }
}
