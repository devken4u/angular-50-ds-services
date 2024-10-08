import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../types';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  eventList: Event[] = [];
  eventName: string = '';

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventList = this.eventService.getEventList();
  }

  add(): void {
    if (this.eventName) {
      this.eventService.addEvent({
        eventName: this.eventName,
      });
      this.eventName = '';
    }
  }

  deleteEvent(index: number): void {
    this.eventService.deleteEvent(index);
  }

  editField(index: number, fieldName: keyof Event, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null && value !== '') {
      const updatedEvent = {
        ...this.eventList[index],
        [fieldName]: value,
      };
      this.update(index, updatedEvent);
    }
  }

  update(index: number, event: Event): void {
    this.eventService.editEvent(index, event);
  }
}
