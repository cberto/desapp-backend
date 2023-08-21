import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AssignmentSubmittedService } from './assignment_submitted.service';
import { CreateAssignmentSubmittedDto } from './dto/create-assignment_submitted.dto';
import { UpdateAssignmentSubmittedDto } from './dto/update-assignment_submitted.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('assignment-submitted')
@ApiTags('assignment-submitted')
export class AssignmentSubmittedController {
  constructor(
    private readonly assignmentSubmittedService: AssignmentSubmittedService,
  ) {}

  @Post()
  create(@Body() createAssignmentSubmittedDto: CreateAssignmentSubmittedDto) {
    return this.assignmentSubmittedService.create(createAssignmentSubmittedDto);
  }

  @Get()
  findAll() {
    return this.assignmentSubmittedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assignmentSubmittedService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAssignmentSubmittedDto: UpdateAssignmentSubmittedDto,
  ) {
    return this.assignmentSubmittedService.update(
      +id,
      updateAssignmentSubmittedDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assignmentSubmittedService.remove(+id);
  }
}
