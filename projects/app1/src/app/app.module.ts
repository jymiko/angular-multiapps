import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { App1Component } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';
@NgModule({
  declarations: [
    App1Component,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NavbarModule
  ],
  providers: [App1Component],
  bootstrap: [App1Component]
})
export class App1SharedModule {}

