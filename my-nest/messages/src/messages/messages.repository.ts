import { readFile, writeFile } from 'fs/promises';
import {Injectable} from '@nestjs/common';

@Injectable()
export class MessageRepository{

async findOne(id: string) {


    const data = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(data);

    return messages[id];

}

async findAll() {

    const data = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(data);

    return Object.values(messages);
}


async create(message: string) {

    const data = await readFile ('messages.json', 'utf8');
    const messages = JSON.parse(data);

    const newMessage = {
        content: message,
        id: Date.now().toString()
    };

    messages[newMessage.id] = newMessage;

    await writeFile('messages.json', JSON.stringify(messages));

}

}



