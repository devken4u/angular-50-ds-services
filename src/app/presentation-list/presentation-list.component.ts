import { Component, OnInit } from '@angular/core';
import { PresentationService } from '../services/presentation.service';
import { Presentation } from '../types';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation-list.component.html',
  styleUrls: ['./presentation-list.component.css'],
})
export class PresentationListComponent implements OnInit {
  presentationList: Presentation[] = [];
  topicTitle: string = '';

  constructor(private presentationService: PresentationService) {}

  ngOnInit(): void {
    this.presentationList = this.presentationService.getPresentationList();
  }

  add(): void {
    if (this.topicTitle) {
      this.presentationService.addPresentation({
        topicTitle: this.topicTitle,
      });
      this.topicTitle = '';
    }
  }

  deletePresentation(index: number): void {
    this.presentationService.deletePresentation(index);
  }

  editField(
    index: number,
    fieldName: keyof Presentation,
    currentValue: string
  ) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null && value !== '') {
      const updatedPresentation = {
        ...this.presentationList[index],
        [fieldName]: value,
      };
      this.update(index, updatedPresentation);
    }
  }

  update(index: number, presentation: Presentation): void {
    this.presentationService.editPresentation(index, presentation);
  }
}
