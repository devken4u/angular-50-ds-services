// subject.service.ts
import { Injectable } from '@angular/core';
import { Subject } from '../types';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  private subjectList: Subject[] = [
    { name: 'Mathematics', time: '9:00 AM' },
    { name: 'Science', time: '10:30 AM' },
    { name: 'History', time: '12:00 PM' },
  ];

  getSubjectList() {
    return this.subjectList;
  }

  addSubject(subject: Subject): void {
    this.subjectList.push(subject);
  }

  deleteSubject(index: number): void {
    this.subjectList.splice(index, 1);
  }

  editSubject(index: number, newSubject: Subject) {
    this.subjectList[index] = newSubject;
  }
}
