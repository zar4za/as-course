import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from './model.entity';
import { GenericService } from 'src/generic/generic.service';

@Injectable()
export class ModelService extends GenericService<Model> {
    constructor(
        @InjectRepository(Model)
        private readonly carModelRepository: Repository<Model>,
    ) {
        super(carModelRepository);
    }

    async findOrCreate(brand: string, model: string): Promise<Model> {
        const stored = await this.carModelRepository.findOne({ 
            where: {
                brand,
                model
            }
        });

        if (stored == null) {
            return await this.carModelRepository.save({
                brand,
                model
            });
        }

        return stored;
    }
}
