import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Contact } from "./contact.entity";
import { Repository } from "typeorm";
import { GenericService } from "src/generic/generic.service";

@Injectable()
export class ContactService extends GenericService<Contact> {
    constructor(
        @InjectRepository(Contact) 
        contactRepository: Repository<Contact>
    ) {
        super(contactRepository);
    }
}