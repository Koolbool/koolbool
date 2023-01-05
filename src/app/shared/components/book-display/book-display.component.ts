import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html'
})
export class BookDisplayComponent implements OnInit {

  @Input() src!: string | undefined;
  @Input() name!: string;

  constructor() { }

  ngOnInit() {
  }

}
