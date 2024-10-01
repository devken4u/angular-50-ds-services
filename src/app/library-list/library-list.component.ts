import { Component } from '@angular/core';
import { Library } from '../types';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrl: './library-list.component.css',
})
export class LibraryListComponent {
  libraryList: Library[] = [];

  name: string = '';
  version: string = '';

  add() {
    this.libraryList.push({
      name: this.name,
      version: this.version,
    });
    this.name = '';
    this.version = '';
  }
}
