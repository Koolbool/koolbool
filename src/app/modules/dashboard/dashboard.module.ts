import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './page/home/home.component';
import { ProfileComponent } from './page/profile/profile.component';
import { BooksComponent } from './page/books/books.component';
import { BookComponent } from './page/book/book.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddBookComponent } from './page/add-book/add-book.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    BooksComponent,
    BookComponent,
    AddBookComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
