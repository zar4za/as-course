import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Contact } from "./contact.entity";
import { ContactService } from "./contact.service";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { CreateContactDto } from "src/dto/create-contact.dto";

@ApiTags('Contacts')
@Controller('contacts')
export class ContactController {
    constructor(private readonly contactService: ContactService) {}

    @Get()
    async findAll(): Promise<Contact[]> {
        return this.contactService.findAll();
    }

    @Post()
    @ApiBody({ type: CreateContactDto })
    async create(@Body() createContactDto: CreateContactDto): Promise<Contact> {
        const contact = new Contact();
        Object.assign(contact, createContactDto);
        return this.contactService.add(contact);
    }
    
    @Delete(":id")
    async delete(@Param() id: number): Promise<Contact> {
        return this.contactService.remove(id);
    }

    @Put(":id")
    async update(@Param("id") id: number, @Body() contactDto: CreateContactDto): Promise<Contact> {
        const contact = new Contact();
        contact.id = id;
        Object.assign(contact, contactDto);
        return this.contactService.update(contact);
    }
}
