// book.service.ts
import { Injectable } from '@angular/core';
import { Book } from '../types';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private bookList: Book[] = [
    {
      name: 'The Great Gatsby',
      publishDate: '1925-04-10',
      author: 'F. Scott Fitzgerald',
    },
    {
      name: '1984',
      publishDate: '1949-06-08',
      author: 'George Orwell',
    },
  ];

  getBookList() {
    return this.bookList;
  }

  addBook(book: Book): void {
    this.bookList.push(book);
  }

  deleteBook(index: number): void {
    this.bookList.splice(index, 1);
  }

  editBook(index: number, newBook: Book) {
    this.bookList[index] = newBook;
  }
}
