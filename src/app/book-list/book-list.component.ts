// book.component.ts
import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../types';

@Component({
  selector: 'app-book',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit {
  bookList: Book[] = [];
  name: string = '';
  publishDate: string = '';
  author: string = '';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookList = this.bookService.getBookList();
  }

  add(): void {
    if (this.name && this.publishDate && this.author) {
      this.bookService.addBook({
        name: this.name,
        publishDate: this.publishDate,
        author: this.author,
      });

      this.name = '';
      this.publishDate = '';
      this.author = '';
    }
  }

  deleteBook(index: number): void {
    this.bookService.deleteBook(index);
  }

  editField(index: number, fieldName: keyof Book, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempBook = { ...this.bookList[index], [fieldName]: value };
      this.update(index, tempBook);
    }
  }

  update(index: number, book: Book): void {
    this.bookService.editBook(index, book);
  }
}
