import { Component } from '@angular/core';
import { Presentation } from '../types';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrl: './presentation-list.component.css',
})
export class PresentationListComponent {
  presentationList: Presentation[] = [];

  topicTitle: string = '';

  add() {
    this.presentationList.push({
      topicTitle: this.topicTitle,
    });
    this.topicTitle = '';
  }
}
