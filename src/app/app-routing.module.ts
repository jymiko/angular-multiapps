import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App1SharedModule } from 'projects/app1/src/app/app.module';
import { LoginModule } from 'projects/login/src/app/app.module';
import { AppModuleUsers } from 'projects/users/src/app/app.module';
const routes: Routes = [
  {path: 'app1', loadChildren: () => import('../../projects/app1/src/app/app-routing.module').then(m=>m.AppRoutingModule)},
  {path: 'users', loadChildren: () => import('../../projects/users/src/app/app-routing.module').then(m=>m.AppRoutingModule)}, 
  {path: 'login', loadChildren: () => import('../../projects/login/src/app/app-routing.module').then(m=>m.AppRoutingModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {initialNavigation: 'enabled'}),
    App1SharedModule,
    AppModuleUsers,
    LoginModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
