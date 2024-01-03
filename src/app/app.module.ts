import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './shared/navbar/navbar.module';
import { HttpClientModule } from '@angular/common/http';
import { GuardService } from './guard/guard.service';
import { App1SharedModule } from 'projects/app1/src/app/app.module';
import { ChildrenGuard } from './guard/children.guard';
import { CanLoadGuard } from './guard/can-load.guard';
import { InputModule } from './shared/input/input.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarModule,
    InputModule,
    HttpClientModule,
    App1SharedModule,
  ],
  providers: [GuardService, ChildrenGuard, CanLoadGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
