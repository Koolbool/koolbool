import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  isSignUp: boolean = false;
  isLoading = false;
  error: string = '';

  form = this.formBuilder.group({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null)
  });

  constructor(private route: ActivatedRoute, private auth: AuthService, private router: Router, private formBuilder: FormBuilder) {

    function createCompareValidator(controlOne: AbstractControl, controlTwo: AbstractControl) {
      return () => {
        if (controlOne.value !== controlTwo.value) {
          return { match_error: 'Value does not match' };
        }
        return null
      }
    }

    if (this.isSignUp) {
      this.form.addValidators(
        createCompareValidator(
          this.form.get('password')!,
          this.form.get('confirmPassword')!
        )
      )
    }
  }

  ngOnInit(): void {
    this.isSignUp = this.route.snapshot.data['isSignUp'];
    console.log("are we on the signup page", this.isSignUp);
  }

  async onSubmit() {
    console.log(this.form.value)
    this.isLoading = true;
    if (this.form?.valid) {
      console.log("its valid");
      if (this.isSignUp) {
        if (this.form.controls.password.value === this.form.controls.confirmPassword.value) {
          await this.auth.register(this.form.value.email!, this.form.value.password!)
          .then(res => {
            console.log('successful registration');
            console.log(res.user);
          })
          .catch(e => {
            this.error = e.message;
          })
        } else {
          this.isLoading = false;
          if (this.form.controls.password.value != this.form.controls.confirmPassword.value) {
            this.error = 'Please make sure your password is matching!';
          }
          return
        }
      } else {
        await this.auth.login(this.form?.value.email!, this.form?.value.password!)
          .then(res => {
            console.log('login successful');
          })
          .catch(e => {
            this.error = e.message;
          })
      }

      // this.form.reset();
    } else {
      console.log("it aint valid");
      return
    }
  }
}
