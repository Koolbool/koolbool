import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(private route: ActivatedRoute, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isSignUp = this.route.snapshot.data['isSignUp'];
    console.log(this.isSignUp);
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return
    const email = form.value.email;
    const password = form.value.password;
    
    this.isLoading = true;
    if (this.isSignUp) {
      this.auth.register(email, password)
        .then(res => {
          console.log('successful registration');
          console.log(res.user);
        })
        .catch(e => {
          this.error = e.message;
        })
      this.isLoading = false;
    } else {
      this.auth.login(email, password)
        .then(res => {
          console.log('login successful');
        })
        .catch(e => {
          this.error = e.message;
        })
      this.isLoading = false;
    }

    form.reset();
  }
}
