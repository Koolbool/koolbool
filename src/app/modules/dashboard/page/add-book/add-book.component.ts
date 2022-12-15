import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
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

  author = new FormControl('');

  form = this.formBuilder.group({
    bookname: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    authors: new FormArray([new FormControl()]),
    categories: new FormControl([''], [Validators.required]),
    bookurl: new FormControl('', [Validators.required])
  });

  genres = ['Action', 'Adventure', 'Comedy', 'Mystery', 'Fantasy', 'Horror', 'Romance', 'Sci-fi', 'Thriller'];

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
    // console.log("this", this.form.value)
    if (this.form?.valid) {
      console.log("its valid");

      this.isLoading = true;
      const b = {
        'bookname': this.form.controls.bookname.value,
        'bookauthors': this.form.controls.authors.value,
        'description': this.form.controls.description.value,
        'categories': this.form.controls.categories.value,
        'bookurl': this.form.controls.bookurl.value,
      }
      console.log(b);
      this.bookService.addBook(b as Book)
      this.isLoading = false;
      this.form.reset();
    } else {
      console.log("it aint valid");
      return
    }
  }

  addAuthor() {
    this.form.controls.authors.push(new FormControl(''));
  }

  trackByFn(index: any) {
    return index;
 }

}
