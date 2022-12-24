import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookDisplayComponent } from './components/book-display/book-display.component';



@NgModule({
  declarations: [
    ButtonComponent,
    SpinnerComponent,
    InputFieldComponent,
    BookDisplayComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonComponent,
    SpinnerComponent,
    InputFieldComponent,
    BookDisplayComponent
  ]
})
export class SharedModule { }
