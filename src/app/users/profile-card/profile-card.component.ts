import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  @Input() user : User;
  @Input() index : number;
  constructor() { }

  ngOnInit() {
  }

}
