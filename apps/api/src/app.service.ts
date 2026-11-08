import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() {
    return {
      service: 'aurum-api',
      status: 'ok',
    };
  }
}
