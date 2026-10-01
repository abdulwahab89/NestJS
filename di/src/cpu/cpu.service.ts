import { Injectable } from '@nestjs/common';
import {PowerService} from '../power/power.service.js';

@Injectable()
export class CpuService {


    constructor(private powerService: PowerService) {

    
    
    }


    compute(a:number, b:number) {


        console.log(`Computing ${a} + ${b}`);
        this.powerService.supplyPower(10);
        return a + b;


    }



}
