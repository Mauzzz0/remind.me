import { Injectable } from '@nestjs/common';
import { ReminderRequestBodyDto } from './dto/reminder-request-body.dto';

@Injectable()
export class ReminderService {
  async create(dto: ReminderRequestBodyDto) {
    return dto;
  }
}
