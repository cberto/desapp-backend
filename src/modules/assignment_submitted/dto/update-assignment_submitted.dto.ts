import { PartialType } from '@nestjs/swagger';
import { CreateAssignmentSubmittedDto } from './create-assignment_submitted.dto';

export class UpdateAssignmentSubmittedDto extends PartialType(CreateAssignmentSubmittedDto) {}
