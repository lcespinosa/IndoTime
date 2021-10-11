import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

interface EmployeeItem {
  id: number;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-ticket-form',
  templateUrl: './sideform.component.html',
  styleUrls: ['./sideform.component.scss'],
})
export class SideformComponent implements OnInit {
  employees: EmployeeItem[] = [
    {
      id: 1,
      name: 'John',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 2,
      name: 'Smith',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 3,
      name: 'Cristian',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 4,
      name: 'Leonard',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 5,
      name: 'Elion',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];

  @Input() formOpen: boolean = false;
  @Output() formClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  ticketForm = this.fb.group({
    ticket_code: [null, Validators.required],
    ticket_title: [null, Validators.required],
    description: [null],
    estimated_hours: [null, Validators.required],
    assigned_employee: [null, Validators.required],
  });

  get code() {
    return this.ticketForm.get('ticket_code');
  }
  get title() {
    return this.ticketForm.get('ticket_title');
  }
  get estimatedHours() {
    return this.ticketForm.get('estimated_hours');
  }
  get employee() {
    return this.ticketForm.get('assigned_employee');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onCloseForm(): void {
    this.formClose.emit(true);
  }

  onSubmit(): void {
    this.formSubmit.emit(this.ticketForm.value);
  }
}
