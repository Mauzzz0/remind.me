import { Injectable, Logger } from '@nestjs/common';
import { Op } from 'sequelize';
import { ReminderModel } from '../../database/postgres/models';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);

  @Cron(CronExpression.EVERY_MINUTE)
  async alert() {
    const date = new Date();

    const reminder = await ReminderModel.findOne({ where: { date: { [Op.lte]: date }, isSent: false } });

    if (reminder) {
      this.logger.log(`Отправляем уведомление id=${reminder.id}`);

      await ReminderModel.update(
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
