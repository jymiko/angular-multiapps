import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Service } from '../service';
import { catchError, retry, take } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends Service {
  loginEmiter:EventEmitter<boolean> = new EventEmitter()

  constructor(private http:HttpClient, private cookieService:CookieService) {
    super()
  }

  get isLogin():boolean{
    const token = this.cookieService.get('token')
    return !!token 
  }

  public Login(user:Object){
    return this.http.post('https://api.realworld.io/api/users/login', user)
    .pipe(
      retry(2),
      catchError(this.catchError)
    )
  }

  public Register(){

  }

  public Logout(){
    this.cookieService.delete('token')
  }
}
