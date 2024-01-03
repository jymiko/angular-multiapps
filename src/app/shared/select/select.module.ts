import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorsModule } from '../validation-errors/validation-errors.module';



@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidationErrorsModule
  ],
  exports: [SelectComponent]
})
export class SelectModule { }
