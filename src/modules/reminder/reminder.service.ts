import { Injectable } from '@nestjs/common';
import { ReminderModel } from '../../database/postgres/models';
import { ReminderCreateRequestBodyDto } from './dto/reminder-create-request-body.dto';

@Injectable()
export class ReminderService {
  async create(dto: ReminderCreateRequestBodyDto): Promise<ReminderModel> {
    return await ReminderModel.create({ ...dto });
  }
}
