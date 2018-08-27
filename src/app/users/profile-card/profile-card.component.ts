import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  @Input() user : User;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }

  viewResume(){
    console.log(this.user.id);
    this.router.navigate(['users/user',this.user.id]);
  }
}
