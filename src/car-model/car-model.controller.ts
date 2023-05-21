import { Controller, Get, Post, Body } from '@nestjs/common';
import { CarModel } from './car-model.entity';
import { CarModelService } from './car-model.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('car-models')
@ApiTags('Car Model')
export class CarModelController {
  constructor(private readonly carModelService: CarModelService) {}

  @Get()
  @ApiOperation({ summary: 'Create car model' })
  @ApiResponse({ status: 201, description: 'The car model has been successfully created', type: CarModel })
  async getAllCarModels(): Promise<CarModel[]> {
    return this.carModelService.getAllCarModels();
  }

  @Post()
  @ApiOperation({ summary: 'Create car model' })
  @ApiResponse({ status: 201, description: 'The car model has been successfully created', type: CarModel })
  async createCarModel(@Body() carModel: CarModel): Promise<CarModel> {
    return this.carModelService.createCarModel(carModel);
  }
}
