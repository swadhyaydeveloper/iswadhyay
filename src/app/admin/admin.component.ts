import { Component, OnInit } from '@angular/core';
import { User } from '../users/models/user.model';
import {UserService} from '../services/user.service'
import { Skill } from '../users/models/skill.model';
import { WorkExperience } from '../users/models/workexpecience.model';
import { Education } from '../users/models/education.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
user:User={}
skill:Skill={}
workexperience:WorkExperience={}
education:Education={}
  constructor(private _userservice:UserService) {
    this.user.skills=[];
    this.user.workexperience=[];
    this.user.education=[];
   }

  ngOnInit() {
  }

  addUser(){
    this._userservice.addUser(this.user);
    this.user={};
  }
  addSkill(){
    this.user.skills.push(this.skill)
    console.log(this.skill)
    this.skill={}
  }

  addWorkexperience(){
    this.user.workexperience.push(this.workexperience)
    console.log(this.workexperience)
    this.workexperience={}
  }
  addEducation(){
    this.user.education.push(this.education)
    console.log(this.education)
    this.education={}
  }

}
