import { ModuleWithProviders, NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

const providers: any = [];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class App1SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: App1SharedModule,
      providers
    }
  }
 }

