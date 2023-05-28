import { Car } from "src/car/car.entity";
import { GenericEntity } from "src/generic/generic.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("damages")
export class Damage extends GenericEntity {
    @Column()
    description: string;
    @Column()
    notificationDate: Date;
    @ManyToOne(() => Car, car => car.damages)
    car: Car;
}