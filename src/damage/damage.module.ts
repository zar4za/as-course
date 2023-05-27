import { Module } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { DamageService } from "./damage.service";
import { Damage } from "./damage.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Damage])],
  controllers: [],
  providers: [DamageService],
})
@ApiTags('Damage')
export class DamageModule {}