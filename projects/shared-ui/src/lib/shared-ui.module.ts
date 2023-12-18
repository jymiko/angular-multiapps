import { NgModule } from '@angular/core';
import { ComponentIdentifierComponent } from './component-identifier/component-identifier.component';
import { ComponentIdentifierModule } from './component-identifier/component-identifier.module';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarModule } from './navbar/navbar.module';



@NgModule({
  declarations: [
  ],
  imports: [
    ComponentIdentifierModule,
    NavbarModule,
    CommonModule,
  ],
  exports: [
    ComponentIdentifierModule,
    NavbarModule
  ]
})
export class SharedUiModule { }
