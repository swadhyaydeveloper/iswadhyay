import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : User[] = [];
  constructor(private _userservice:UserService) { }

  ngOnInit() {
    this._userservice.getUsers().subscribe(data=>this.users=data);
  }
  

}
