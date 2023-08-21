import { Test, TestingModule } from '@nestjs/testing';
import { AssignmentSubmittedController } from './assignment_submitted.controller';
import { AssignmentSubmittedService } from './assignment_submitted.service';

describe('AssignmentSubmittedController', () => {
  let controller: AssignmentSubmittedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssignmentSubmittedController],
      providers: [AssignmentSubmittedService],
    }).compile();

    controller = module.get<AssignmentSubmittedController>(AssignmentSubmittedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
