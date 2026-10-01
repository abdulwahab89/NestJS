import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller.js';

import {MessageService} from './messages.service.js';
import {MessageRepository} from './messages.repository.js';    

@Module({
        controllers: [MessagesController],
        providers: [MessageService, MessageRepository]
})
        

export class MessagesModule {

}
