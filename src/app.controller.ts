import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  async getHello(@Res() res): Promise<string> {
    const greetingTest = await this.appService.getHello();
    return res.status(HttpStatus.OK).json(greetingTest);
  }
}
