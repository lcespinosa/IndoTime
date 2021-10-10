import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

type StatusType = 'idle' | 'in_progress' | 'canceled' | 'completed';
interface TicketItem {
  code: string;
  title: string;
  description: string;
  proyect: string;
  employee: string;
  status: StatusType;
  start_date: Date;
  end_date?: Date;
  last_work_time?: number;
  completation: number;
}

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  providers: [DatePipe],
})
export class TicketsComponent implements OnInit {
  tickets: TicketItem[] = [
    {
      code: 'TI-01',
      title: 'Do the roof',
      description: 'Not disturb',
      proyect: "Homework",
      employee: 'Leonardo',
      status: 'idle',
      start_date: new Date(),
      completation: 0,
    },
    {
      code: 'TI-02',
      title: 'Do the air conditioning',
      description: 'Not disturb',
      proyect: "Homework",
      employee: 'Castillo',
      status: 'in_progress',
      start_date: new Date(),
      completation: 0,
    },
    {
      code: 'TI-03',
      title: 'Do the cristal clear',
      description: 'Not disturb',
      proyect: "Homework",
      employee: 'Castillo',
      status: 'canceled',
      start_date: new Date(),
      completation: 0,
    },
    {
      code: 'TI-04',
      title: 'Do the experimentation',
      description: 'Not disturb',
      proyect: "Homework",
      employee: 'Castillo',
      status: 'completed',
      start_date: new Date(),
      completation: 0,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
