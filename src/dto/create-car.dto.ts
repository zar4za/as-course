import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsNotEmpty, Length } from "class-validator";

export class CreateCarDto {
    @ApiProperty()
    year: number;
    @IsAlpha()
    @ApiProperty()
    color: string;
    @Length(17, 17)
    @ApiProperty()
    vin: string;
    @IsAlpha()
    @ApiProperty()
    brandName: string;
    @IsAlpha()
    @ApiProperty()
    modelName: string;
    @IsNotEmpty()
    @ApiProperty()
    contactIds: number[];
}
