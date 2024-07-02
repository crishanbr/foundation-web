import { IsString, IsInt, IsUUID, IsDate, IsOptional } from 'class-validator';

export class CreateAgreementDto {
  @IsInt()
  id: number;

  @IsUUID()
  user_id: string;

  @IsString()
  agreement_type: string;

  @IsString()
  status: string;

  @IsString()
  mode: string;

  @IsDate()
  start_date: Date;

  @IsDate()
  end_date: Date;

  @IsInt()
  duration: number;

  @IsString()
  organization_name: string;

  @IsString()
  description: string;
  }
  
