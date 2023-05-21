import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { CarModel } from './car-model.entity';
import { CarModelService } from './car-model.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('car-models')
@ApiTags('Car Model')
export class CarModelController {
  constructor(private readonly carModelService: CarModelService) {}

  @Get()
  @ApiOperation({ summary: 'Получение списка моделей автомобилей.' })
  @ApiResponse({ status: 200, description: 'Список моделей автомобилей.', type: CarModel, isArray: true })
  async getAllCarModels(): Promise<CarModel[]> {
    return await this.carModelService.getAllCarModels();
  }

  @Post()
  @ApiOperation({ summary: 'Создание модели автомобиля.' })
  @ApiResponse({ status: 201, description: 'Модель автомобиля успешно создана.', type: CarModel })
  async createCarModel(@Body() carModel: CarModel): Promise<CarModel> {
    return await this.carModelService.createCarModel(carModel);
  }

  @Delete()
  @ApiOperation({ summary: 'Удаление модели автомобиля.' })
  @ApiResponse({ status: 200, description: 'Модель автомобиля успешно удалена.', type: CarModel })
  async deleteCarModel(@Body() carModel: CarModel): Promise<CarModel> {
    return await this.carModelService.deleteCarModel(carModel);
  }
}
