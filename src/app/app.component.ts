import { Component, OnInit } from '@angular/core';
import { App1Component } from 'projects/app1/src/app/app.component';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'multiapps-v12';
  isLogin!: boolean;

  constructor(private currentUserService:App1Component, private authService:AuthService){}

  ngOnInit(): void {
    this.isLogin = this.authService.isLogin
    console.log(this.isLogin)
    setTimeout(() => {
      this.currentUserService.setCurrentUser()
    }, 2000)
  }
}
