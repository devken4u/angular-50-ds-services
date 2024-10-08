import { Injectable } from '@angular/core';
import { Framework } from '../types';

@Injectable({
  providedIn: 'root',
})
export class FrameworkService {
  private frameworkList: Framework[] = [
    {
      name: 'Angular',
      version: '14.2.0',
    },
    {
      name: 'React',
      version: '18.0.0',
    },
  ];

  getFrameworkList(): Framework[] {
    return this.frameworkList;
  }

  addFramework(framework: Framework): void {
    this.frameworkList.push(framework);
  }

  deleteFramework(index: number): void {
    this.frameworkList.splice(index, 1);
  }

  editFramework(index: number, newFramework: Framework): void {
    this.frameworkList[index] = newFramework;
  }
}
