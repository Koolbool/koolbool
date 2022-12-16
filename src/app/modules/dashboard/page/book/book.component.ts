import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/shared/book';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book!: Book;
  id: string | null;

  constructor(private route: ActivatedRoute, private bookService: BookService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {

    this.bookService
      .getBook(this.id)
      .subscribe((book) => {
        this.book = book as Book;
        console.log(book);
      })
    
  }


}
