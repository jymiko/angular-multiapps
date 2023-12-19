import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {LayoutModule} from '@angular/cdk/layout';


@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    UserListRoutingModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    LayoutModule
  ],
  exports: [UserListComponent]
})
export class UserListModule { }
