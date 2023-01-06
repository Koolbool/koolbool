import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from 'src/app/shared/review.service';
import { reviews } from 'src/app/shared/reviews';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  id: string;
  selectedFile!: File;

  form = this.formBuilder.group({
    title: new FormControl<string>('', [Validators.required]),
    comment: new FormControl<string>('', Validators.required)
  });

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private reviewService: ReviewService, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id') as string;
  }
  
  ngOnInit(): void {
  }

  selectFile(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  onSubmit() {
    if (this.form?.valid) {
      const review = {
        'title': this.form.controls.title.value,
        'comment': this.form.controls.comment.value,
        'rate': 5,
        'uid': '123',
        'bookid': this.id
      }
      this.reviewService.addReview(review as reviews, this.id, this.selectedFile);
      console.log("success!");
      console.log("Routing you back to book page in 3 seconds!");
      setTimeout(() => {
        this.router.navigate(['/dashboard/book/', this.id])
      }, 3000)
    } else {
      console.log('form aint valid');
      return 
    }
  }

}
