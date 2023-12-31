import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input.component';
import { ValidationErrorsModule } from '../validation-errors/validation-errors.module';



@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidationErrorsModule
  ],
  exports: [InputComponent]
})
export class InputModule { }
