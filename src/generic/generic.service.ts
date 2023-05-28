import { FindManyOptions, FindOptionsRelationByString, FindOptionsRelations, Repository } from "typeorm";
import { GenericEntity } from "./generic.entity";

export class GenericService<T extends GenericEntity> {
    constructor(
        protected readonly repository: Repository<T>
    ) {}

    async add(entity: T): Promise<T> {
        return await this.repository.save(entity);
    }

    async remove(id: any): Promise<T> {
        const entity = await this.findOne(id);
        return await this.repository.remove(entity);
    }

    async update(entity: T): Promise<T> {
        const stored = await this.findOne(entity.id);
        Object.assign(stored, entity);
        return await this.repository.save(stored);
    }

    async findOne(
        id: any, 
        relations?: FindOptionsRelationByString | FindOptionsRelations<T>): 
        Promise<T> { 
        return await this.repository.findOne({
            where: {
                id
            },
            relations
        })
    }

    async findAll(options?: FindManyOptions<T>): Promise<T[]> {
        return await this.repository.find(options);
    }
}
