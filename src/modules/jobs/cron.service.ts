import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Op } from 'sequelize';
import { ReminderModel } from '../../database/postgres/models';

@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);

  constructor(private readonly reminderModel: typeof ReminderModel) {}

  @Cron(CronExpression.EVERY_MINUTE)
  async alert() {
    const date = new Date();

    const reminder = await this.reminderModel.findOne({ where: { date: { [Op.lte]: date }, isSent: false } });

    if (reminder) {
      this.logger.log(`Отправляем уведомление id=${reminder.id}`);

      await this.reminderModel.update(
        { isSent: true },
        {
          where: {
            id: reminder.id,
          },
        },
      );

      this.logger.log(`Уведомление id=${reminder.id} отправлено и помечено`);
    } else {
      this.logger.log('Уведомление не найдено');
    }
  }
}
