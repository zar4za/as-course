import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.entity';
import { CreateCarDto } from 'src/dto/create-car.dto';
import { ModelService } from 'src/model/model.service';
import { CreateDamageDto } from 'src/dto/create-damage.dto';
import { Damage } from 'src/damage/damage.entity';
import { DamageService } from 'src/damage/damage.service';
import { GenericService } from 'src/generic/generic.service';
import { ContactService } from 'src/contact/contact.service';

@Injectable()
export class CarService extends GenericService<Car> {
    constructor(
        @InjectRepository(Car) private readonly carRepository: Repository<Car>,
        private readonly modelSevice: ModelService,
        private readonly damageService: DamageService,
        private readonly contactService: ContactService
    ) {
        super(carRepository);
    }

    async create(createCarDto: CreateCarDto): Promise<Car> {
        const car = new Car();
        car.color = createCarDto.color;
        car.year = createCarDto.year;
        car.vin = createCarDto.vin;
        car.model = await this.modelSevice.findOrCreate(createCarDto.brandName, createCarDto.modelName);
        car.contacts = await Promise.all(createCarDto.contactIds.map(async id => await this.contactService.findOne(id)));
        return this.carRepository.save(car);
    }

    async update(car: Car): Promise<Car> {
        const stored = await this.findOne(car.id);
        Object.assign(stored, car);
        return this.carRepository.save(stored);
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
        
        await this.damageService.create(damage);

        return this.carRepository.save(car);
    }
}
