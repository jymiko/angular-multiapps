import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App1SharedModule } from 'projects/app1/src/app/app.module';
import { LoginModule } from 'projects/login/src/app/app.module';
import { AppModuleUsers } from 'projects/users/src/app/app.module';
import { GuardService } from './guard/guard.service';
import { ChildrenGuard } from './guard/children.guard';
import { AppComponent } from './app.component';
import { CanLoadGuard } from './guard/can-load.guard';
import { AdminModule } from 'projects/admin/src/app/app.module';
const routes: Routes = [
  {path: 'login', loadChildren: () => import('../../projects/login/src/app/app-routing.module').then(m=>m.AppRoutingModule)},
  {path:'', component: AppComponent, canActivate:[GuardService], canActivateChild:[ChildrenGuard], children: [
    {path:'', redirectTo: 'app1', pathMatch: 'full'},
    {path: 'app1', loadChildren: () => import('../../projects/app1/src/app/app-routing.module').then(m=>m.AppRoutingModule), pathMatch: 'full'},
  ]},
  {path:'admin', loadChildren: () => import('../../projects/admin/src/app/app-routing.module').then(m=>m.AppRoutingModule), canLoad:[CanLoadGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {initialNavigation: 'enabled'}),
    App1SharedModule,
    AppModuleUsers,
    LoginModule,
    AdminModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
