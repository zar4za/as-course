import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, JoinTable } from 'typeorm';
import { Model as Model } from '../model/model.entity';
import { ApiProperty } from '@nestjs/swagger';

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
}
