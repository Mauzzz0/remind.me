import { ApiProperty } from '@nestjs/swagger';

export class ReminderResponseBodyDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'To go for an interview tomorrow' })
  description: string;

  @ApiProperty({ example: 'example@mail.ru' })
  email: string;

  @ApiProperty({ example: '2025-01-24T13:24:32.320Z' })
  date: Date;

  @ApiProperty({ example: '2025-01-24T13:24:32.320Z' })
  createdAt: string;

  @ApiProperty({ example: '2025-01-24T13:24:32.320Z' })
  updatedAt: string;

  @ApiProperty({ example: false })
  isSent: boolean;
}
