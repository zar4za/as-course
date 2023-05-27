import { PrimaryGeneratedColumn } from "typeorm";

export class GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;
}

export interface GenericConstructor<T> {
    new (): T
}