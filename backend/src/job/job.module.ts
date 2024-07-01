import { Module, forwardRef } from '@nestjs/common';
import { JobService } from './job.service';
import { JobController } from './job.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Job } from './entities/job.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Job]), forwardRef(() => AuthModule)],
  controllers: [JobController],
  providers: [JobService],
  exports: [JobService],
})
export class JobModule {}
