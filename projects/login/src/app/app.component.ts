import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login';

  // fb = inject(FormBuilder)
  // http = inject(HttpClient)
  // router = inject(Router)

  constructor(
    private fb:FormBuilder,
    private http:HttpClient,
    private router:Router
  ){}

  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmit(): void {
    //TODO api service post disini
  }
}
