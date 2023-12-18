import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App1SharedModule } from '../../projects/app1/src/app/app.module';

const routes: Routes = [
  {path: 'app1', loadChildren: () => import('../../projects/app1/src/app/app-routing.module').then(m=>m.AppRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), App1SharedModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
