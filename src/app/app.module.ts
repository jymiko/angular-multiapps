import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './shared/navbar/navbar.module';
import { InputComponent } from './shared/input/input.component';
import { HttpClientModule } from '@angular/common/http';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { GuardService } from './guard.service';
import { App1SharedModule } from 'projects/app1/src/app/app.module';
import { ChildrenGuard } from './children.guard';
import { CanLoadGuard } from './can-load.guard';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarModule,
    HttpClientModule,
    App1SharedModule
  ],
  providers: [GuardService, ChildrenGuard, CanLoadGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
