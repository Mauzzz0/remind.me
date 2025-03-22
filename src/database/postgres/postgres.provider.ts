import { Provider } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import appConfig from '../../config';
import { modelsList } from './models';

export const SEQUELIZE = 'SEQUELIZE';

export const sequelizeProvider: Provider<Sequelize> = {
  provide: SEQUELIZE,
  useFactory: async (): Promise<Sequelize> => {
    const sequelize: Sequelize = new Sequelize({
      dialect: 'postgres',
      logging: false,
      ...appConfig.postgres,
    });

    sequelize.addModels(modelsList);

    await sequelize.authenticate();

    await sequelize.sync({ alter: true });

    return sequelize;
  },
};
