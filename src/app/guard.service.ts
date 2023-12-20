import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { App1Component } from 'projects/app1/src/app/app.component';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  constructor(private currentUserService:App1Component, private router:Router) {}
  canActivate(): Observable<boolean> {
    return this.currentUserService.currentUser$.pipe((
      filter(currentUser => currentUser !== undefined),
      map((curentUser) => {
        if(!curentUser){
          this.router.navigateByUrl('/')
          return false
        }
        return true
      })
    ))
  }
}
