import {
    Column,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  company: string; 

  @Column()
  department: string; 

  @Column()
  position: string; 

  @Column()
  schedule: string; 

  @Column()
  mode: string;

  @DeleteDateColumn()
  deletedAt: Date;
}

