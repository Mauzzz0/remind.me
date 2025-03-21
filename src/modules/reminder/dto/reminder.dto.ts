import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class ReminderDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  id: number;

  @ApiProperty({ example: 'To go for an interview tomorrow' })
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 'example@mail.ru' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '2025-01-24T13:24:32.320Z' })
  @IsDate()
  date: string;
}
