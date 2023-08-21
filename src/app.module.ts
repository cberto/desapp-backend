import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  StudentModule,
  PasswordResetModule,
  MailModule,
  JtpModule,
  EvaluationsModule,
  CourseModule,
  AssignmentSubmittedModule,
  AssignmentModule,
  AdminModule,
} from './modules';

@Module({
  imports: [
    StudentModule,
    PasswordResetModule,
    MailModule,
    JtpModule,
    EvaluationsModule,
    CourseModule,
    AssignmentSubmittedModule,
    AssignmentModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
