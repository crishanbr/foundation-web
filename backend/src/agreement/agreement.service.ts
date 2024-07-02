import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAgreementDto } from './dto/create-agreement.dto';
import { UpdateAgreementDto } from './dto/update-agreement.dto';
import { Agreement } from './entities/agreement.entity';


@Injectable()
export class AgreementService {

  constructor(
    @InjectRepository(Agreement)
    private readonly agreementRepository: Repository<Agreement>,
  ) {}

  create(createAgreementDto: CreateAgreementDto) {
    return this.agreementRepository.save(createAgreementDto);
  }

  findOneByOrganization(organization_name: string) {
    return this.agreementRepository.findOneBy({ organization_name });
  }

  findAll() {
    return this.agreementRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} agreement`;
  }

  update(id: number, updateAgreementDto: UpdateAgreementDto) {
    return `This action updates a #${id} agreement`;
  }

  remove(id: number) {
    return `This action removes a #${id} agreement`;
  }
}
