import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
  
  @Entity()
  export class Internship {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    company: string;
  
    @Column()
    career: string;
  
    @Column()
    internship_type: string;
  
    @Column({ type: 'date' })
    start_date: Date;
  
    @Column({ type: 'date' })
    end_date: Date;
  
    @Column()
    total_hours: number;
  
    @Column()
    mode: string;

    @DeleteDateColumn({ nullable: true })
    deletedAt: Date;

  }
  
