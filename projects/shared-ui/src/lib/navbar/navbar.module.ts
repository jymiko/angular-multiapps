import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './navbar.component';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
