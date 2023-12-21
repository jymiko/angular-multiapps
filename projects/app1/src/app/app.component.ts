import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class App1Component {
  title = 'app1';

  currentUser$ = new BehaviorSubject<{id: string, name:string} | null | undefined>(undefined)
  constructor(private cookieService:CookieService){}
  setCurrentUser(){
    if(this.cookieService.get('token')){
      this.currentUser$.next({id:'1', name:'test'})
    }else{
      this.currentUser$.next(null)
    }
  }
}
