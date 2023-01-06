import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/shared/auth.service';
import { User } from 'src/app/shared/services/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {
  navIsOpen: boolean = false;

  user!: any;

  constructor(private auth: AuthService, private userService: UserService, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(
      async (res) => {
        return await this.userService.getUser(res?.uid as string).then((e) => {
          this.user = e;
          console.log(this.user);
        });
      }
    )
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.auth.logout();
  }

  toggleNav() {
    console.log("hey");
  }
}
