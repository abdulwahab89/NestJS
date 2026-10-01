import { Controller } from '@nestjs/common';
import { DiskService } from '../disk/disk.service.js';
import { CpuService } from '../cpu/cpu.service.js';
import {Get} from '@nestjs/common';
@Controller('computer')
export class ComputerController {
    constructor(private cpuService: CpuService, private diskService: DiskService) {}



    @Get('run')
    run() {
    this.cpuService.compute(5, 10);
    this.diskService.readData();
    }

}

