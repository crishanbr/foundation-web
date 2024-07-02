import {Entity, PrimaryGeneratedColumn, DeleteDateColumn, Column, ManyToOne, JoinColumn,} from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Agreement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('uuid')
  user_id: string;

  @Column()
  agreement_type: string;

  @Column()
  status: string;

  @Column()
  mode: string;

  @Column('date')
  start_date: Date;

  @Column('date')
  end_date: Date;

  @Column('int')
  duration: number;

  @Column()
  organization_name: string;

  @Column('text')
  description: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @DeleteDateColumn()
  deletedAt: Date;
}

