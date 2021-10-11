import { Component, OnInit } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';

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

type ActivityType = 'checkin' | 'checkout';
interface ActivityItem {
  ticket: string;
  type: ActivityType;
  date: Date;
}

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  providers: [DatePipe, UpperCasePipe],
})
export class TicketsComponent implements OnInit {
  tickets: TicketItem[] = [
    {
      code: 'TI-01',
      title: 'Do the roof',
      description: 'Not disturb',
      proyect: 'Homework',
      employee: 'Leonardo',
      status: 'idle',
      start_date: new Date(),
      completation: 0,
    },
    {
      code: 'TI-02',
      title: 'Do the air conditioning',
      description: 'Not disturb',
      proyect: 'Homework',
      employee: 'Castillo',
      status: 'in_progress',
      start_date: new Date(),
      completation: 0,
    },
    {
      code: 'TI-03',
      title: 'Do the cristal clear',
      description: 'Not disturb',
      proyect: 'Homework',
      employee: 'Castillo',
      status: 'canceled',
      start_date: new Date(),
      completation: 0,
    },
    {
      code: 'TI-04',
      title: 'Do the experimentation',
      description: 'Not disturb',
      proyect: 'Homework',
      employee: 'Castillo',
      status: 'completed',
      start_date: new Date(),
      completation: 0,
    },
  ];

  activities: ActivityItem[] = [];

  selectedTicket?: TicketItem = this.tickets[0];

  formOpen: boolean = false;

  constructor(private up: UpperCasePipe) {}

  ngOnInit(): void {}

  onAddTicketClick(event: Event): void {
    this.formOpen = !this.formOpen;
  }

  onCloseForm(): void {
    this.formOpen = false;
  }

  onSubmit(event: any): void {
    console.log(event);
    this.formOpen = false;

    this.tickets.push({
      code: this.up.transform(event.ticket_code),
      title: event.ticket_title,
      description: event.description,
      employee: event.assigned_employee,
      proyect: 'Homework',
      status: 'idle',
      start_date: new Date(),
      completation: 0,
    });
  }

  onTicketClick(event: any): void {
    const { currentTarget } = event;
    this.selectedTicket = this.tickets.find(
      (t) => t.code === currentTarget?.dataset?.key
    );
    this.activities = this.getActivities('target');
  }

  private getActivities(code: string): ActivityItem[] {
    return [
      {
        ticket: 'TI-04',
        type: 'checkin',
        date: new Date(),
      },
      {
        ticket: 'TI-04',
        type: 'checkout',
        date: new Date(),
      },
      {
        ticket: 'TI-04',
        type: 'checkin',
        date: new Date(),
      },
      {
        ticket: 'TI-04',
        type: 'checkout',
        date: new Date(),
      },
      {
        ticket: 'TI-04',
        type: 'checkin',
        date: new Date(),
      },
    ];
  }
}
