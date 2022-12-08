import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore/firebase';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/book';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  searchInput: string = '';
  books!: Observable<Book[]>;
  lastBook!: Book;
  hasSearched = false;
  
  constructor(private bookService: BookService) {
  }

  bookSearch(event: any) {
    console.log(event.target.value);
  }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  getNextBooks() {
    // this.books = this.bookService.getBooks(this.lastBook);
  }

}