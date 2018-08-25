import { Injectable } from '@angular/core';
/* import { HttpClient } from '@angular/common/http'; */
import { AngularFirestore , AngularFirestoreDocument} from 'angularfire2/firestore';
import { User } from '../users/models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:Observable<any[]>;
  user:Observable<any>;
  _url="/assets/data/users.json";

  constructor(/* private http: HttpClient */private db : AngularFirestore) { }

  getUsers():Observable<User[]>{
    /* return this.http.get<User[]>(this._url) */
    this.users= this.db.collection('users').valueChanges();
    console.log(this.users)
    return this.users;
  }

  getUser(id:string):Observable<User>{
    /* return this.http.get<User[]>(this._url) */
    this.user= this.db.doc('users/'+id).valueChanges();
    console.log(this.user)
    return this.user;
  }
}


