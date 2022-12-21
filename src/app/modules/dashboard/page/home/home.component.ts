import { Component, OnInit } from '@angular/core';
import { getAuth } from "firebase/auth";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  auth = getAuth();

  constructor() {
    // console.log(this.auth.currentUser);
  }

  ngOnInit(): void {
  }

}
