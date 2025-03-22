import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ReminderRequestBodyDto {
  @ApiProperty({ example: 'To go for an interview tomorrow' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ example: 'example@mail.ru' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '2025-01-24T13:24:32.320Z' })
  @IsDate()
  @Type(() => Date)
  date: Date;
}
