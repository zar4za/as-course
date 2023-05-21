import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarModel } from './car-model.entity';

@Injectable()
export class CarModelService {
  constructor(
    @InjectRepository(CarModel)
    private readonly carModelRepository: Repository<CarModel>,
  ) {}

  async getAllCarModels(): Promise<CarModel[]> {
    return this.carModelRepository.find();
  }

  async createCarModel(carModel: CarModel): Promise<CarModel> {
    return this.carModelRepository.save(carModel);
  }
}
