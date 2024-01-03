import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() isLogin!:boolean
  constructor(public cookieService:CookieService, private authService:AuthService, private router:Router) { }
  ngOnInit(): void {
   
  }

  logoutUser(){
    this.authService.Logout()
    this.router.navigateByUrl('/')
  }

}
