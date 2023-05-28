import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CarService } from 'src/car/car.service';
import { CreateCarDto } from 'src/dto/create-car.dto';
import { Car } from './car.entity';
import { CreateDamageDto } from 'src/dto/create-damage.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Damage } from 'src/damage/damage.entity';

@ApiTags('Cars')
@Controller('cars')
export class CarController {
    constructor(private readonly carService: CarService) {}

    @Get()
    @ApiOperation({ summary: 'Получение списка моделей автомобилей.' })
    @ApiResponse({ status: 200, description: 'Список автомобилей.', type: Car, isArray: true })
    async findAll(): Promise<Car[]> {
        return await this.carService.findAll({
            relations: ['model'],
        });
    }

    @Post()
    @ApiOperation({ summary: 'Добавление автомобиля.' })
    @ApiResponse({ status: 201, description: 'Добавленный автомобиль', type: Car })
    async create(@Body() createCarDto: CreateCarDto) {
        return await this.carService.create(createCarDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Изменение автомобиля.' })
    @ApiResponse({ status: 200, description: 'Измененный автомобиль', type: Car })
    async update(@Param('id') id: number, @Body() createCarDto: CreateCarDto) {
        const car = new Car();
        car.id = id;
        Object.assign(car, createCarDto);
        return await this.carService.update(car);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Удаление автомобиля' })
    @ApiResponse({ status: 200, description: 'Удаленный автомобиль', type: Car })
    async delete(@Param('id') id: number) {
        return await this.carService.remove(id);
    }

    @Post(':id/damages')
    @ApiOperation({ summary: 'Добавление повреждения автомобиля.' })
    @ApiResponse({ status: 201, description: 'Добавленное повреждение автомобиля', type: Damage })
    async createDamage(@Param('id') id: number, @Body() createDamageDto: CreateDamageDto) {
        return await this.carService.createDamage(id, createDamageDto);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Получение автомобиля по id.' })
    @ApiResponse({ status: 200, description: 'Автомобиль', type: Car })
    async findOne(@Param('id') id: number): Promise<Car> {
        return await this.carService.findOne(id, ['model', 'damages']);
    }
}
