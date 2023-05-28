import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty } from "class-validator";

export class CreateDamageDto {
    @IsNotEmpty()
    @ApiProperty()
    description: string;
    @IsDate()
    @ApiProperty()
    notificationDate: Date;
}