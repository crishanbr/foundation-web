import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Agreement } from './entities/agreement.entity';
import { AgreementService } from './agreement.service';
import { AgreementController } from './agreement.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Agreement]), forwardRef(() => AuthModule)],
  controllers: [AgreementController],
  providers: [AgreementService],
  exports: [AgreementService]
})
export class AgreementModule {}

