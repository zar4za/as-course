import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable, OneToMany, ManyToMany } from 'typeorm';
import { Model } from '../model/model.entity';
import { Damage } from 'src/damage/damage.entity';
import { Contact } from 'src/contact/contact.entity';
import { GenericEntity } from 'src/generic/generic.entity';

@Entity("cars")
export class Car extends GenericEntity {
  @Column()
  year: number;
  @Column()
  color: string;
  @Column()
  vin: string;
  @ManyToOne(() => Model, model => model.model)
  model: Model;
  @OneToMany(() => Damage, damage => damage.car)
  damages: Damage[];
  @ManyToMany(() => Contact, contact => contact.cars)
  @JoinTable({ name: "car_contact" })
  contacts: Contact[];
}
