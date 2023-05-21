import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CarModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  brand: string;

  @Column()
  @ApiProperty()
  model: string;
}