import { Component, OnInit } from '@angular/core';
import { App1Component } from 'projects/app1/src/app/app.component';
import { AuthService } from './services/auth/auth.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'multiapps-v12';
  isLogin!: boolean;
  currentRoute: string;

  constructor(private currentUserService:App1Component, private authService:AuthService, public route:Router){
    this.currentRoute = this.route.url
  }

  ngOnInit(): void {
    this.route.events.subscribe((routeData) => {
      if(routeData instanceof NavigationEnd){
        this.currentRoute = routeData.url
        this.isLogin = this.authService.isLogin
      }
    })
    setTimeout(() => {
      this.currentUserService.setCurrentUser()
    }, 2000)
  }
}
