import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {
  navIsOpen: boolean = false;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
  }

  onLogout() {
    this.auth.logout();
  }

  toggleNav() {
    console.log("hey");
  }
}
