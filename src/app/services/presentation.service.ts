import { Injectable } from '@angular/core';
import { Presentation } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PresentationService {
  private presentationList: Presentation[] = [
    {
      topicTitle: 'Introduction to Angular',
    },
    {
      topicTitle: 'Advanced TypeScript',
    },
  ];

  getPresentationList(): Presentation[] {
    return this.presentationList;
  }

  addPresentation(presentation: Presentation): void {
    this.presentationList.push(presentation);
  }

  deletePresentation(index: number): void {
    this.presentationList.splice(index, 1);
  }

  editPresentation(index: number, newPresentation: Presentation): void {
    this.presentationList[index] = newPresentation;
  }
}
