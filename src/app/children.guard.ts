import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { App1Component } from 'projects/app1/src/app/app.component';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChildrenGuard implements CanActivateChild {
  constructor(private currentUserService:App1Component, private router:Router) {}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.currentUserService.currentUser$.pipe((
      filter(currentUser => currentUser !== undefined),
      map((currentUser) => {
        if(!currentUser){
          this.router.navigateByUrl('/login')
          return false
        }
        return true
      })
    ))
  }
  
}
