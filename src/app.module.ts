import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { PostgresModule } from './database';
import { CronService } from './modules/jobs/cron.service';
import { ReminderModule } from './modules/reminder/reminder.module';

@Module({
  imports: [ReminderModule, PostgresModule, ScheduleModule.forRoot()],
  providers: [CronService],
})
export class AppModule {}
