import { ApiProperty } from '@nestjs/swagger';
import { Appointment } from '../../appointments/entities/appointment.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import {
  NOTES_DTO_APPOINTMENT_ID_DESCRIPTION,
  NOTES_DTO_APPOINTMENT_ID_EXAMPLE,
  NOTES_DTO_NOTES_EXAMPLE,
  NOTE_DTO_NOTES_DESCRIPTION,
  NOTES_DTO_DATE_DESCRIPTION,
  NOTES_DTO_DATE_EXAMPLE,
} from '../constants';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: NOTES_DTO_APPOINTMENT_ID_DESCRIPTION,
    example: NOTES_DTO_APPOINTMENT_ID_EXAMPLE,
  })
  id: number;

  @Column()
  @ApiProperty({
    description: NOTES_DTO_DATE_DESCRIPTION,
    example: NOTES_DTO_DATE_EXAMPLE,
  })
  date: Date;

  @Column()
  @ApiProperty({
    description: NOTES_DTO_NOTES_EXAMPLE,
    example: NOTE_DTO_NOTES_DESCRIPTION,
  })
  note: string;

  @Column({ nullable: false, type: 'varchar' })
  @ManyToOne(() => Appointment)
  @ApiProperty({
    description: NOTES_DTO_APPOINTMENT_ID_DESCRIPTION,
    example: NOTES_DTO_APPOINTMENT_ID_EXAMPLE,
  })
  appointmentId: string;
}
