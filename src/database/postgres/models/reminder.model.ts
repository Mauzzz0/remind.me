import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'reminders' })
export class ReminderModel extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  })
  public id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  public description: string;

  @Column({ type: DataType.STRING, allowNull: false })
  public email: string;

  @Column({ type: DataType.DATE, allowNull: false })
  public date: Date;
}
