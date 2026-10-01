import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service.js';

@Injectable()
export class DiskService {
    constructor(private powerService: PowerService) {   

}

    readData() {
        console.log('Reading data from disk');
        this.powerService.supplyPower(5);
    }

}
