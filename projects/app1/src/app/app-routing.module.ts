import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from 'src/app/guard.service';

const routes: Routes = [
  {path: 'app1/home', loadChildren: () => import('./home/home.module').then(m=>m.HomeModule), canActivate: [GuardService]},
  {path: 'app1', redirectTo: 'app1/home'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
