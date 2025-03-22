import { Module } from '@nestjs/common';
import { PostgresModule } from './database';
import { ReminderModule } from './modules/reminder/reminder.module';

@Module({
  imports: [ReminderModule, PostgresModule],
})
export class AppModule {}
