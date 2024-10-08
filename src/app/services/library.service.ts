import { Injectable } from '@angular/core';
import { Library } from '../types';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  private libraryList: Library[] = [
    {
      name: 'RxJS',
      version: '7.5.0',
    },
    {
      name: 'Lodash',
      version: '4.17.21',
    },
  ];

  getLibraryList(): Library[] {
    return this.libraryList;
  }

  addLibrary(library: Library): void {
    this.libraryList.push(library);
  }

  deleteLibrary(index: number): void {
    this.libraryList.splice(index, 1);
  }

  editLibrary(index: number, newLibrary: Library): void {
    this.libraryList[index] = newLibrary;
  }
}
