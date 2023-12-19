import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'users/user-list', loadChildren: () => import('./user-list/user-list.module').then(m=>m.UserListModule)},
  {path: 'users', redirectTo: 'users/user-list'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
