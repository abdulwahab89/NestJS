import {Controller , Get , Post, Body , Param, NotFoundException} from '@nestjs/common';
import {CreateMessageDto} from './dtos/create-message.dto.js';

import {MessageService} from './messages.service.js';


@Controller('messages')
export class MessagesController {   


    constructor (public messageService: MessageService,
        
    ) {


        this.messageService = messageService;
        
     }
    
    @Get()
    listMessages(){
        return this.messageService.listMessages();

    }



    @Post()  
    createMessage(@Body() body: CreateMessageDto){
    

        console.log(body);

        return this.messageService.createMessage(body.content);
        
    
    }



    @Get('/:id')
    async getMessage(@Param('id') id: string  ){

        console.log(id);


        const message = await this.messageService.getMessage(id);

        if(!message){
            throw new NotFoundException('Message not found');
        }

return message;
    }
}