import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User={};
  id:string;
  constructor(private route : ActivatedRoute,private _userservice : UserService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this._userservice.getUser(this.id).subscribe(user=>this.user=user);

      }

}
