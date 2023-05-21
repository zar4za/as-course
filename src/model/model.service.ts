import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from './model.entity';

@Injectable()
export class ModelService {
    constructor(
        @InjectRepository(Model)
        private readonly carModelRepository: Repository<Model>,
    ) {}

    async getAllCarModels(): Promise<Model[]> {
        return await this.carModelRepository.find();
    }

    async findOneByName(brand: string, model: string): Promise<Model> {
        return await this.carModelRepository.findOne({
            where: {
                brand,
                model,
            },
        });
    }

    async createCarModel(carModel: Model): Promise<Model> {
        return await this.carModelRepository.save(carModel);
    }

    async deleteCarModel(carModel: Model): Promise<Model> {
        return await this.carModelRepository.remove(carModel);
    }
}
