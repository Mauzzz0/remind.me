import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Op } from 'sequelize';
import { ReminderModel } from '../../database/postgres/models';

@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);

  @Cron(CronExpression.EVERY_MINUTE)
  async alert() {
    const date = new Date();

    const reminders = await ReminderModel.findAll({ where: { date: { [Op.lte]: date }, isSent: false } });

    if (reminders.length > 0) {
      for (const reminder of reminders) {
        this.logger.log(`Отправляем уведомление id=${reminder.id}`);

        await ReminderModel.update(
          { isSent: true },
          {
            where: {
              id: reminder.id,
            },
          },
        );
      }
    } else {
      this.logger.log('Уведомление не найдено');
    }
  }
}
