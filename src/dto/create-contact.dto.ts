import { ApiProperty } from "@nestjs/swagger";

export class CreateContactDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    adress: string;
    
    @ApiProperty()
    phone: string;
}