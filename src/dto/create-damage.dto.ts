import { ApiProperty } from "@nestjs/swagger";

export class CreateDamageDto {
    @ApiProperty()
    description: string;
    @ApiProperty()
    notificationDate: Date;
}