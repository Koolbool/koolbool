import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './page/home/home.component';
import { ProfileComponent } from './page/profile/profile.component';
import { BooksComponent } from './page/books/books.component';
import { BookComponent } from './page/book/book.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddBookComponent } from './page/add-book/add-book.component';
import { ReviewComponent } from './page/review/review.component';
import { AddReviewComponent } from './page/add-review/add-review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    BooksComponent,
    BookComponent,
    AddBookComponent,
    ReviewComponent,
    AddReviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardModule { }
