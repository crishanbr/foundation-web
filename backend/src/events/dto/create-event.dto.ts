export class CreateEventDto {
    id: number; // id as integer primary key
    code: string;
    name: string;
    description: string;
    address: string;
    cost: number; // cost as float
    image: string;
    start_date: Date; 
    end_date: Date; 
    participants: number;
    mode: string;
    status: string;
    user_id: string; // user_id as uuid foreign key
  }
