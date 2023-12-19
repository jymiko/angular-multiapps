import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListModule } from './user-list/user-list.module';

const providers: any = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModuleUsers { 
  static forChild(): ModuleWithProviders<any> {
    return {
      ngModule: AppModuleUsers,
      providers
    }
  }
}
