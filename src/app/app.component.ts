import { Component, OnInit } from '@angular/core';
import { AppModule } from './app.module';
import { App1Component } from 'projects/app1/src/app/app.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'multiapps-v12';

  constructor(private currentUserService:App1Component){}

  ngOnInit(): void {
    setTimeout(() => {
      this.currentUserService.setCurrentUser()
    }, 2000)
  }
}
