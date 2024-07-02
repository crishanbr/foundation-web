import {
    Entity,
    PrimaryGeneratedColumn,
    DeleteDateColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  import { User } from 'src/users/entities/user.entity';
  
  @Entity()
  export class Event {
    @PrimaryGeneratedColumn()
    id: number; 
  
    @Column({ unique: true, nullable: false })
    code: string; 
  
    @Column()
    name: string; 
  
    @Column('text')
    description: string; 
  
    @Column()
    address: string;
  
    @Column('float')
    cost: number; 
  
    @Column({ nullable: true })
    image: string;
  
    @Column('date')
    start_date: Date; 
  
    @Column('date')
    end_date: Date; 
  
    @Column('int')
    participants: number;
  
    @Column()
    mode: string; 
  
    @Column()
    status: string; 
  
    @Column('uuid')
    user_id: string; // user_id as uuid foreign key
  
    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;
    
    @DeleteDateColumn()
    deletedAt: Date; 
  }
  
