import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from './user.entity.js'

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo: Repository<User>) { }


    create(email: string, password: string) {
        const user = this.repo.create({ email, password })
        return this.repo.save(user)

    }



    find(email: string) {
        return this.repo.find({ where: { email } })
    }


    update(email: string, newEmail: string, newPassword: string) {
        return this.repo.update({ email }, { email: newEmail, password: newPassword })
    }



    findOne(id: number) {
        return this.repo.findOneBy({ id })
    }





}

