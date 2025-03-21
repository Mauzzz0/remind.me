import { ApiProperty } from '@nestjs/swagger';

export class ReminderDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'To go for an interview tomorrow' })
  description: string;

  @ApiProperty({ example: 'example@mail.ru' })
  email: string;

  @ApiProperty({ example: '2025-01-24T13:24:32.320Z' })
  date: string;
}
