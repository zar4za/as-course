import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModelModule } from './model/model.module';
import { CarModule } from './car/car.module';
import { DamageModule } from './damage/damage.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'cars',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CarModelModule,
    CarModule,
    DamageModule,
    ContactModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
