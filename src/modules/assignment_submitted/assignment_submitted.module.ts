import { Module } from '@nestjs/common';
import { AssignmentSubmittedService } from './assignment_submitted.service';
import { AssignmentSubmittedController } from './assignment_submitted.controller';

@Module({
  controllers: [AssignmentSubmittedController],
  providers: [AssignmentSubmittedService],
})
export class AssignmentSubmittedModule {}
