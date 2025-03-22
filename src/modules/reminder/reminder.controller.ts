import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { ReminderRequestBodyDto } from './dto/reminder-request-body.dto';
import { ReminderResponseBodyDto } from './dto/reminder-response-body.dto';
import { ReminderService } from './reminder.service';

@Controller('reminder')
export class ReminderController {
  constructor(private readonly reminderService: ReminderService) {}

  @ApiOperation({ summary: 'Создание напоминания' })
  @ApiCreatedResponse({ type: ReminderResponseBodyDto })
  @ApiBody({ type: ReminderRequestBodyDto })
  @Post()
  async create(@Body() dto: ReminderRequestBodyDto): Promise<ReminderRequestBodyDto> {
    return this.reminderService.create(dto);
  }
}
