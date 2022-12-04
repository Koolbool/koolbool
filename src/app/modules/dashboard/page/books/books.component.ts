import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  searchInput: string = '';
  
  bookSearch(event: any) {
    console.log(event.target.value)
  }


  constructor(private bookService: BookService) {
    this.bookService.getBooks();
  }

  ngOnInit() {
  }

}