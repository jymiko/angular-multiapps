import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  constructor(private authService:AuthService, private router:Router, @Inject(PLATFORM_ID) private platformId:any) {}
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
      const isLogin = this.authService.isLogin
      if(state.url){
        if(isLogin){
          return true
        }else{
          this.router.navigate(['/login'])
          return false
        }
      }
      return true
  }
}
