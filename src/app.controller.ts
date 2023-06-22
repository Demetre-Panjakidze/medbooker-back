import { Controller, Get } from '@nestjs/common';
import { AppService, Bla } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Bla {
    return this.appService.getHello();
  }
}
