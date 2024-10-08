import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { Library } from '../types';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css'],
})
export class LibraryListComponent implements OnInit {
  libraryList: Library[] = [];
  libraryName: string = '';
  libraryVersion: string = '';

  constructor(private libraryService: LibraryService) {}

  ngOnInit(): void {
    this.libraryList = this.libraryService.getLibraryList();
  }

  add(): void {
    if (this.libraryName && this.libraryVersion) {
      this.libraryService.addLibrary({
        name: this.libraryName,
        version: this.libraryVersion,
      });

      this.libraryName = '';
      this.libraryVersion = '';
    }
  }

  deleteLibrary(index: number): void {
    this.libraryService.deleteLibrary(index);
  }

  editField(index: number, fieldName: keyof Library, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null && value !== '') {
      const updatedLibrary = {
        ...this.libraryList[index],
        [fieldName]: value,
      };
      this.update(index, updatedLibrary);
    }
  }

  update(index: number, library: Library): void {
    this.libraryService.editLibrary(index, library);
  }
}
