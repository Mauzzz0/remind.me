import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { ReminderCreateRequestBodyDto } from './dto/reminder-create-request-body.dto';
import { ReminderResponseBodyDto } from './dto/reminder-response-body.dto';
import { ReminderService } from './reminder.service';

@Controller('reminder')
export class ReminderController {
  constructor(private readonly reminderService: ReminderService) {}

  @ApiOperation({ summary: 'Создание напоминания' })
  @ApiCreatedResponse({ type: ReminderResponseBodyDto })
  @Post()
  async create(@Body() dto: ReminderCreateRequestBodyDto) {
    return this.reminderService.create(dto);
  }
}
