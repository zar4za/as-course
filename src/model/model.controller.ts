import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { Model } from './model.entity';
import { ModelService } from './model.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('car-models')
@ApiTags('Car Model')
export class CarModelController {
  constructor(private readonly carModelService: ModelService) {}

  @Get()
  @ApiOperation({ summary: 'Получение списка моделей автомобилей.' })
  @ApiResponse({ status: 200, description: 'Список моделей автомобилей.', type: Model, isArray: true })
  async getAllCarModels(): Promise<Model[]> {
    return await this.carModelService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Создание модели автомобиля.' })
  @ApiResponse({ status: 201, description: 'Модель автомобиля успешно создана.', type: Model })
  async createCarModel(@Body() carModel: Model): Promise<Model> {
    return await this.carModelService.add(carModel);
  }

  @Delete(":id")
  @ApiOperation({ summary: 'Удаление модели автомобиля.' })
  @ApiResponse({ status: 200, description: 'Модель автомобиля успешно удалена.', type: Model })
  async deleteCarModel(@Param("id") id: number): Promise<Model> {
    return await this.carModelService.remove(id);
  }
}
