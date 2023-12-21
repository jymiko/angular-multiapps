import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { App1Component } from 'projects/app1/src/app/app.component';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AuthService } from './services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  constructor(private currentUserService:App1Component, private authService:AuthService, private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
      const isLogin = this.authService.isLogin

      if(state.url === '/login' && isLogin){
        // handle redirect
        this.router.navigate(['/'])
        return false
        // check if user is not logged in and access login page
      }else if(!['/','/login'].includes(state.url) && !isLogin){
        // handle redirect
        this.router.navigate(['/login'])
        return false
      } 

      return true
  }
}
