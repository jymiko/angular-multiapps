import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'login';

  public form!:FormGroup;

  constructor(
    private fb:FormBuilder,
    private http:HttpClient,
    private router:Router,
    private authService:AuthService,
    private cookieService:CookieService
  ){}

  ngOnInit(){
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    })
  }

  onSubmit(): void {
    
    const payload = {
      user: {
        ...this.form.value
      }
    }
    this.authService.Login(payload).subscribe((result) => {
      console.log(result, 'result')
      if(result){
        this.router.navigateByUrl('/app1')
        this.cookieService.set('token', result.user.token)
        
      }
    }, error => {
      console.log(error.message, 'error')
    })
  }
}
