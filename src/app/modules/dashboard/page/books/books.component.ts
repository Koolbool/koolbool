import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore } from '@angular/fire/firestore/firebase';
import { Observable } from "rxjs";
import { Book } from 'src/app/shared/book';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books!: Observable<Book[]>;
  searchedBook!: Book[];
  hasSearched: boolean = false;
  // lastBook!: Book;
  
  constructor(private bookService: BookService, private afs: AngularFirestore) {
  }

  bookSearch(name: string) {
    // use algolia in the future for query on search
    if (name.length < 3) {
      return
    }
    this.hasSearched = true;
    return this.afs.collection('Books', ref => ref.where('bookname', '==', name))
      .valueChanges()
      .subscribe((book) => {
        this.searchedBook = book as Book[];
      })
  }

  ngOnInit() {
    this.books = this.bookService.getBooks()
  }

  getNextBooks() {
    // this.books = this.bookService.getBooks(this.lastBook);
  }

}