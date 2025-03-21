import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { ReminderDto } from './dto/reminder.dto';
import { ReminderService } from './reminder.service';

@Controller('reminder')
export class ReminderController {
  constructor(private readonly reminderService: ReminderService) {}

  @ApiOperation({ summary: 'Создание напоминания' })
  @ApiCreatedResponse({ type: ReminderDto })
  @Post()
  async create(@Body() body: ReminderDto) {}
}
