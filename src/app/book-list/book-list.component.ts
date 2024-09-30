import { Component } from '@angular/core';
import { Book } from '../types';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  bookList: Book[] = [];

  name: string = '';
  publishDate: string = '';
  author: string = '';

  add() {
    this.bookList.push({
      name: this.name,
      publishDate: this.publishDate,
      author: this.author,
    });
    this.name = '';
    this.publishDate = '';
    this.author = '';
  }
}
