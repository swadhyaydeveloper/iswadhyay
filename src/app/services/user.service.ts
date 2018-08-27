import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
/* import { HttpClient } from '@angular/common/http'; */
import { AngularFirestore , AngularFirestoreDocument,AngularFirestoreCollection} from 'angularfire2/firestore';
import { User } from '../users/models/user.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersCollection:AngularFirestoreCollection<User>;
  users:Observable<User[]>;
  user:Observable<User>;
  _url="/assets/data/users.json";

  constructor(/* private http: HttpClient */private db : AngularFirestore) {
    this.usersCollection=this.db.collection('users');
   }

  getUsers():Observable<User[]>{
    /* return this.http.get<User[]>(this._url) */
    /* this.users= this.db.collection('users').valueChanges(); */
    this.users= this.usersCollection.snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as User;
        data.id=a.payload.doc.id;
        return data;
      });
    }));
    console.log(this.users)
    return this.users;
  }

  getUser(id:string):Observable<User>{
    /* return this.http.get<User[]>(this._url) */
    this.user= this.db.doc('users/'+id).valueChanges();
    console.log(this.user)
    return this.user;
  }

  addUser(user:User){
    this.usersCollection.add(user);
    console.log(user)
  }
}


