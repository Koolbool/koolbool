import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
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

  isLoading: boolean = false;

  bookname = new FormControl('bookname', [Validators.required]);
  description = new FormControl('description', [Validators.required]);

  form = this.formBuilder.group({
    bookname: this.bookname,
    description: this.description
  });

  bookauthorstest: string[] = ['Martin'];
  categoriestest: string[] = ['Comedy', 'Fantasy'];


  constructor(private bookService: BookService, private formBuilder: FormBuilder) { }

  // uploadImage(event: any){
  //   this.imageUploadService.uploadImage(event.target.files[0], 'image/book/').subscribe(
  //     (url)=>{
  //       console.log(url);
  //     }
  //   );
    
  // }
  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form.value)
    if (this.form?.valid) {
      console.log("its valid");

      this.isLoading = true;
        const b = {'bookurl': 'testurl.com', 'bookauthors': this.bookauthorstest, 'categories': this.categoriestest, 'description': 'the description of the book', 'bookname': 'a test book'}
        this.bookService.addBook(b)
        this.isLoading = false;
        this.form.reset();
    } else {
      console.log("it aint valid");
      return
    }
  }

}
