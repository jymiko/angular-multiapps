import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'app1/home', loadChildren: () => import('./home/home-routing.module').then(m=>m.HomeRoutingModule)},
  {path: 'app1', redirectTo: 'app1/home'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
