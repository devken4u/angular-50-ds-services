import { Component } from '@angular/core';
import { Event } from '../types';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css',
})
export class EventListComponent {
  eventList: Event[] = [];

  eventName: string = '';

  add() {
    this.eventList.push({
      eventName: this.eventName,
    });
    this.eventName = '';
  }
}
