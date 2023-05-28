import { ApiProperty } from '@nestjs/swagger';
import { Car } from 'src/car/car.entity';
import { GenericEntity } from 'src/generic/generic.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity("models")
export class Model extends GenericEntity {
  @Column() 
  @ApiProperty()
  brand: string;

  @Column()
  @ApiProperty()
  model: string;

  @OneToMany(() => Car, car => car.model)
  cars: Car[];
}
