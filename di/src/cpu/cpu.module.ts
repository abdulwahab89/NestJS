import { Module } from '@nestjs/common';
import {CpuService} from './cpu.service.js';
import {PowerModule} from '../power/power.module.js';
@Module({

    providers: [CpuService],
    imports: [PowerModule],
    exports: [CpuService]


})
export class CpuModule {



}
