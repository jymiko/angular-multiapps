import { Observable } from "rxjs";

export abstract class Service {
  catchError(err:any, caught: Observable<any>){
    return caught
  }
}