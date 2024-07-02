import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Role } from '../../common/enums/rol.enum';
import { Event } from 'src/events/entities/event.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false, select: false })
  password: string;

  @Column({ type: 'varchar', nullable: false, default: 'USER' })
  role: Role;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  direction: string;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date;

  @OneToMany(() => Event, event => event.user)
  events: Event[];
  
}
