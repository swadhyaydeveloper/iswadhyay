import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { UserService } from '../services/user.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : User[] = [];
  user : User={};
  i=0;
  constructor(private _userservice:UserService,private routes:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this._userservice.getUsers().subscribe(users=>this.users=users);
    this._userservice.getUser("b90zxQjuhxzknYjy3axq").subscribe(user=>this.user=user);    
  }

  getuser(id:string){
    
    this._userservice.getUser("b90zxQjuhxzknYjy3axq").subscribe(user=>this.user=user);
  }

  viewResume(){
    this.routes.navigate(['users/user'],{relativeTo:this.route});
  }
  

}
