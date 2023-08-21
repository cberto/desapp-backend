import { PartialType } from '@nestjs/swagger';
import { CreateJtpDto } from './create-jtp.dto';

export class UpdateJtpDto extends PartialType(CreateJtpDto) {}
