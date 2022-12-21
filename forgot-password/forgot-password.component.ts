import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }from '@angular/forms';
// import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
imageUrl: string = '/assets/image/bg-register.jpeg';
insertForm: FormGroup;
Email: FormControl;

constructor (private acct: AccountService, private fb: FormBuilder) {}

ngOnInit(): void {
    // this.setBackgroundImage();
    this.Email = new FormControl('', [Validators.required, Validators.email]);

    this.insertForm = this.fb.group({
      Email: this.Email
    });
}
onSubmit() {
  let userInfo = this.insertForm.value;
  this.acct.sendForgotPasswordEmail(userInfo.Email).subscribe((result) => {
    if (result && result.message == 'Success'){
      $('#forgotPassCard').html('');
      $('#forgotPassCard').append(
        "<div class='alert alert-success show'>"+
        '<strong>Success!</strong> please Check your email for password reset instructions.'+
        '</div>'
      );
    }
  });
}
// setBackgroungImage(){
//   $('body').css({
//     'background-image': 'url('+ this.imageUrl +'), linear-gradient(rgba(255,0,0.5)')
//     'background-repeat': 'no-repeat',
//     'background-size': 'cover'
//   });
// }
// }
