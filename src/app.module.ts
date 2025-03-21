import { Module } from '@nestjs/common';
import { ReminderModule } from './modules/reminder/reminder.module';

@Module({
  imports: [ReminderModule],
})
export class AppModule {}
