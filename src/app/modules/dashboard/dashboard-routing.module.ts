import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './page/book/book.component';
import { BooksComponent } from './page/books/books.component';
import { HomeComponent } from './page/home/home.component';
import { ProfileComponent } from './page/profile/profile.component';
import { AddBookComponent } from './page/add-book/add-book.component';
import { ReviewComponent } from './page/review/review.component';
import { AddReviewComponent } from './page/add-review/add-review.component';
import { FinishSignupComponent } from './page/finish-signup/finish-signup.component';

const routes: Routes = [
  {
    path: 'complete-signup',
    component: FinishSignupComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'add',
    component: AddBookComponent
  },
  {
    path: 'add-review/:id',
    component: AddReviewComponent
  },
  {
    path: 'book/:id',
    component: BookComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'review',
    component: ReviewComponent
  },
  {
    path: '',
    redirectTo: '/dashboard/home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
