import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  isSignUp: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isSignUp = this.route.snapshot.data['isSignUp'];
    console.log(this.isSignUp);
  }

}
