import { Component, OnInit } from '@angular/core';
import { concatMap } from 'rxjs';
import { Book } from 'src/app/shared/book';
import { BookService } from 'src/app/shared/book.service';
import { ImageUploadService } from 'src/app/shared/image-upload.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private bookService: BookService, private imageUploadService: ImageUploadService) { }

  uploadImage(event: any){
    this.imageUploadService.uploadImage(event.target.files[0], 'image/book/').subscribe(
      (url)=>{
        console.log(url);
      }
    );
    
  }
  ngOnInit(): void {
  }

}
