import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-finish-signup',
  templateUrl: './finish-signup.component.html',
  styleUrls: ['./finish-signup.component.css']
})
export class FinishSignupComponent implements OnInit {

  accountType = [1, 2, 3];
  stage1: boolean = true;

  selectedFile!: File;

  form = this.formBuilder.group({
    uType: new FormControl<Number>(1, [Validators.required]),
    displayName: new FormControl<string | null>(null, [Validators.required]),
    phoneNumber: new FormControl<string | null>(null, [Validators.required]),
    children: new FormControl<string[] | null>(null)
  })

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
  }

  selectFile(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  onSubmit() {
    if (this.form?.valid) {
      console.log("form submitted");
      const user = {
        'uType': this.form.controls.uType.value,
        'displayName': this.form.controls.displayName.value,
        'phoneNumber': this.form.controls.phoneNumber.value,
      }
      this.userService.addUser(user, this.selectedFile);
    }
    else {
      console.log("form aint valid");
      return
    }
  }
}
