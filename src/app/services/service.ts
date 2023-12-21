import { Observable, throwError } from "rxjs";

export abstract class Service {
  catchError(err:any, caught: Observable<any>){
    return throwError(err)
  }
}