import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';

const providers: any = [];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NavbarModule
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

