import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInternshipDto } from './dto/create-internship.dto';
import { UpdateInternshipDto } from './dto/update-internship.dto';
import { Internship } from './entities/internship.entity';

@Injectable()
export class InternshipService {

  constructor(
    @InjectRepository(Internship)
    private readonly internshipRepository: Repository<Internship>,
  ) {}

  create(createInternshipDto: CreateInternshipDto) {
    return this.internshipRepository.save(createInternshipDto);
  }

  findOneByCareer(career: string) {
    return this.internshipRepository.findOneBy({ career });
  }

  findAll() {
    return this.internshipRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} internship`;
  }

  update(id: number, updateInternshipDto: UpdateInternshipDto) {
    return `This action updates a #${id} internship`;
  }

  remove(id: number) {
    return `This action removes a #${id} internship`;
  }
}
