import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.entity';
import { CreateCarDto } from 'src/dto/create-car.dto';
import { Model } from 'src/model/model.entity';
import { ModelService } from 'src/model/model.service';

@Injectable()
export class CarService {
    constructor(
        @InjectRepository(Car) private readonly carRepository: Repository<Car>,
        private readonly modelSevice: ModelService
    ) {}

    async findAll(): Promise<Car[]> {
        return await this.carRepository.find({
            relations: ['model'],
        });
    }

    async create(createCarDto: CreateCarDto): Promise<Car> {
        const car = new Car();
        car.year = createCarDto.year;
        car.color = createCarDto.color;
        car.vin = createCarDto.vin;

        let model = await this.modelSevice.findOneByName(createCarDto.brandName, createCarDto.modelName);

        if (model == null) {
            model = new Model();
            model.brand = createCarDto.brandName;
            model.model = createCarDto.modelName;
            model = await this.modelSevice.createCarModel(model);
        }

        car.model = model;

        return this.carRepository.save(car);
    }
}
