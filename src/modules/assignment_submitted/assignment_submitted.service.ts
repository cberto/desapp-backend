import { Injectable } from '@nestjs/common';
import { CreateAssignmentSubmittedDto } from './dto/create-assignment_submitted.dto';
import { UpdateAssignmentSubmittedDto } from './dto/update-assignment_submitted.dto';

@Injectable()
export class AssignmentSubmittedService {
  create(createAssignmentSubmittedDto: CreateAssignmentSubmittedDto) {
    return 'This action adds a new assignmentSubmitted';
  }

  findAll() {
    return `This action returns all assignmentSubmitted`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assignmentSubmitted`;
  }

  update(id: number, updateAssignmentSubmittedDto: UpdateAssignmentSubmittedDto) {
    return `This action updates a #${id} assignmentSubmitted`;
  }

  remove(id: number) {
    return `This action removes a #${id} assignmentSubmitted`;
  }
}
