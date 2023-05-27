import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Damage } from "./damage.entity";
import { Repository } from "typeorm";

@Injectable()
export class DamageService {
    constructor(
        @InjectRepository(Damage) private readonly carRepository: Repository<Damage>,
    ) {}

    async create(damage: Damage): Promise<Damage> {
        return await this.carRepository.save(damage);
    }
}