import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
