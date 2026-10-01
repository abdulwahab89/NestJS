
import {MessageRepository} from './messages.repository.js';

import {Injectable} from '@nestjs/common';


@Injectable()
export class MessageService {

    // The MessageService is dependent on the MessageRepository
    // The MessageRepository is injected into the MessageService
    // This is a form of dependency injection
    constructor(public messageRepository: MessageRepository,



    ) {

        // Service is creating its own depedency 
        this.messageRepository = new MessageRepository(); // DO NOT DO THIS IN REAL LIFE, USE DEPENDENCY INJECTION INSTEAD
        

        // DO NOT DO THIS IN REAL LIFE, USE DEPENDENCY INJECTION INSTEAD

     }

    async listMessages() {
        return await this.messageRepository.findAll();
    }

    async getMessage(id: string) {
        return await this.messageRepository.findOne(id);
    }

    async createMessage(message: string) {
        return await this.messageRepository.create(message);
    }


    findOne(id: string) {
        return this.messageRepository.findOne(id);
    }   



}