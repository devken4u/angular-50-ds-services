import { Component, OnInit } from '@angular/core';
import { Subject } from '../types';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css',
})
export class SubjectListComponent implements OnInit {
  subjectList: Subject[] = [];
  name: string = '';
  time: string = '';

  constructor(private subjectService: SubjectService) {}

  ngOnInit(): void {
    this.subjectList = this.subjectService.getSubjectList();
  }

  add(): void {
    if (this.name && this.time) {
      this.subjectService.addSubject({ name: this.name, time: this.time });
      this.name = '';
      this.time = '';
    }
  }

  deleteSubject(index: number): void {
    this.subjectService.deleteSubject(index);
  }

  editField(index: number, fieldName: string, currentValue: any) {
    const value = prompt(fieldName, currentValue);
    if (value !== null) {
      const tempSubject = { ...this.subjectList[index], [fieldName]: value };
      this.update(index, tempSubject);
    }
  }

  update(index: number, subject: Subject): void {
    this.subjectService.editSubject(index, subject);
  }
}
