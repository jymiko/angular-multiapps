import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../service';
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService extends Service {

  constructor(private http:HttpClient) {
    super()
   }

   public GetUserList(){
    return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
      retry(3),
      catchError(this.catchError)
    )
  }
}
