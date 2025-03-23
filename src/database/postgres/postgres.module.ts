import { Global, Inject, Logger, Module, OnApplicationShutdown } from '@nestjs/common';
import { Sequelize } from 'sequelize';
import { SEQUELIZE, sequelizeProvider } from './postgres.provider';

@Global()
@Module({
  providers: [sequelizeProvider],
  exports: [sequelizeProvider],
})
export class PostgresModule implements OnApplicationShutdown {
  private readonly logger = new Logger(PostgresModule.name);

  constructor(@Inject(SEQUELIZE) private sequelize: Sequelize) {}

  public async onApplicationShutdown(): Promise<void> {
    await this.sequelize.close();

    this.logger.log('Sequelize connection destroyed');
  }
}
