import { Injectable } from '@angular/core';
import { Event } from '../types';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private eventList: Event[] = [
    {
      eventName: 'Conference 2024',
    },
    {
      eventName: 'Music Festival',
    },
  ];

  getEventList(): Event[] {
    return this.eventList;
  }

  addEvent(event: Event): void {
    this.eventList.push(event);
  }

  deleteEvent(index: number): void {
    this.eventList.splice(index, 1);
  }

  editEvent(index: number, newEvent: Event): void {
    this.eventList[index] = newEvent;
  }
}
