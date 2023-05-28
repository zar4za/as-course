import { ApiProperty } from "@nestjs/swagger";

export class CreateCarDto {
    @ApiProperty()
    year: number;
    @ApiProperty()
    color: string;
    @ApiProperty()
    vin: string;
    @ApiProperty()
    brandName: string;
    @ApiProperty()
    modelName: string;
    @ApiProperty()
    contactIds: number[];
}
