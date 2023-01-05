import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth } from "firebase/auth";
import { User } from 'src/app/shared/services/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user!: User;

  constructor(private userService: UserService, private auth: AngularFireAuth) {
    this.auth.authState.subscribe(
      async (res) => {
        return await this.userService.getUser(res?.uid as string).then((e) => {
          this.user = e as User;
        });
      }
    )
  }

  ngOnInit(): void {

  }

}
