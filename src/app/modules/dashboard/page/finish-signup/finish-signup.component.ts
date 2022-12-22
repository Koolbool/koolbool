import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-finish-signup',
  templateUrl: './finish-signup.component.html',
  styleUrls: ['./finish-signup.component.css']
})
export class FinishSignupComponent implements OnInit {

  isLoading: boolean = false;

  accountType = ['Individual', 'Parent', 'Teacher'];
  stage1: boolean = true;

  selectedFile!: File;

  form = this.formBuilder.group({
    uType: new FormControl<String | null>(null, [Validators.required]),
    displayName: new FormControl<string | null>(null, [Validators.required]),
    phoneNumber: new FormControl<string | null>(null, [Validators.required]),
    children: new FormControl<string[] | null>(null)
  })

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  selectFile(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  async onSubmit() {
    if (this.form?.valid) {
      this.isLoading = true;
      console.log("form submitted");
      const user = {
        'uType': this.form.controls.uType.value,
        'displayName': this.form.controls.displayName.value,
        'phoneNumber': this.form.controls.phoneNumber.value,
      }
      console.log(user);
      this.userService.addUser(user, this.selectedFile);
    }
    else {
      console.log("form aint valid");
      return
    }
  }
}
