import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth/auth.service';
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

      // if(isPlatformBrowser(this.platformId) || isPlatformServer(this.platformId)){
      //   console.log(isPlatformBrowser(this.platformId), 'client')
      //   console.log(isPlatformServer(this.platformId), 'server')
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
      // }

      return true
  }
}
