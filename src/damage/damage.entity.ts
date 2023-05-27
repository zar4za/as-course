import { Car } from "src/car/car.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("damages")
export class Damage {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    description: string;
    @Column()
    notificationDate: Date;
    @ManyToOne(() => Car, car => car.damages)
    car: Car;
}