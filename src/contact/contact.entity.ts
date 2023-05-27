import { ApiBody, ApiProperty } from "@nestjs/swagger";
import { Car } from "src/car/car.entity";
import { GenericEntity } from "src/generic/generic.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("contacts")
export class Contact extends GenericEntity {
    @Column()
    name: string;
    @Column()
    adress: string;
    @Column()
    phone: string;

    @ManyToMany(() => Car, car => car.contacts)
    @JoinTable({ name: "car_contact" })
    cars: Car[];
}