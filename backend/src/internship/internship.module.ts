import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { InternshipService } from './internship.service';
import { InternshipController } from './internship.controller';
import { Internship } from './entities/internship.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Internship]), forwardRef(() => AuthModule)],
  controllers: [InternshipController],
  providers: [InternshipService],
  exports: [InternshipService],
})
export class InternshipModule {}

