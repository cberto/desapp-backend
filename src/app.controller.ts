import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  new(): string {
    return this.appService.new();
  }

  @Get()
  all(): string {
    return this.appService.all();
  }

  @Put()
  update(): string {
    return this.appService.update();
  }

  @Delete()
  delete(): string {
    return this.appService.delete();
  }
}
