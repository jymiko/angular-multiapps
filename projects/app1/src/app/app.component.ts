import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class App1Component {
  title = 'app1';

  currentUser$ = new BehaviorSubject<{id: string, name:string} | null | undefined>(undefined)

  setCurrentUser(){
    if(localStorage.getItem('token')){
      this.currentUser$.next({id:'1', name:'test'})
    }else{
      this.currentUser$.next(null)
    }
  }
}
