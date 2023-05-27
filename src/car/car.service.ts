import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.entity';
import { CreateCarDto } from 'src/dto/create-car.dto';
import { Model } from 'src/model/model.entity';
import { ModelService } from 'src/model/model.service';
import { CreateDamageDto } from 'src/dto/create-damage.dto';
import { Damage } from 'src/damage/damage.entity';
import { DamageService } from 'src/damage/damage.service';
import { GenericService } from 'src/generic/generic.service';

@Injectable()
export class CarService extends GenericService<Car> {
    constructor(
        @InjectRepository(Car) private readonly carRepository: Repository<Car>,
        private readonly modelSevice: ModelService,
        private readonly damageService: DamageService
    ) {
        super(carRepository);
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

    async createDamage(id: number, createDamageDto: CreateDamageDto) {
        const car = await this.findOne(id);

        if (car == null || car == undefined) {
            return null;
        }

        let damage = new Damage();
        damage.car = car;
        damage.description = createDamageDto.description;
        damage.notificationDate = createDamageDto.notificationDate;
        
        damage = await this.damageService.create(damage);

        car.damages.push(damage);

        return this.carRepository.save(car);
    }
}
