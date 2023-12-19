import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/users/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList: any[] = new Array;
  constructor(private userService:UserServiceService) { }

  public getUserListData(){
    this.userService.GetUserList().subscribe(response => this.userList = response);
  }

  ngOnInit(): void {
    this.getUserListData()
  }

}
