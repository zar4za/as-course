import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, JoinTable, OneToMany, ManyToMany } from 'typeorm';
import { Model } from '../model/model.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Damage } from 'src/damage/damage.entity';
import { Contact } from 'src/contact/contact.entity';

@Entity("cars")
export class Car {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  year: number;

  @ApiProperty()
  @Column()
  color: string;

  @ApiProperty()
  @Column()
  vin: string;

  @ApiProperty()
  @ManyToOne(() => Model, model => model.model)
  model: Model;

  @ApiProperty()
  @OneToMany(() => Damage, damage => damage.car)
  damages: Damage[];

  @ApiProperty()
  @ManyToMany(() => Contact, contact => contact.cars)
  @JoinTable({ name: "car_contact" })
  contacts: Contact[];
}
