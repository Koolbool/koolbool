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
  hasUser: boolean = false;
  isLoading: boolean = false;

  id!: string | undefined;
  user!: User;

  constructor(private userService: UserService, private auth: AngularFireAuth) {
    this.auth.authState.subscribe(user => {
      this.id = user?.uid;
      this.userService.getUser(this.id as string).then((e) => {
        this.hasUser = true;
        this.user = e as User;
      })
    })

  }

  ngOnInit(): void {

  }

}
