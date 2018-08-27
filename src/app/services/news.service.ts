import { Injectable } from '@angular/core';
/* import { HttpClient } from '@angular/common/http'; */
import { News } from '../news/news.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore , AngularFirestoreDocument,AngularFirestoreCollection} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news:Observable<News[]>
  /* _url = "/assets/data/news.json"; */
  newscollection:AngularFirestoreCollection<News>
  constructor(/* private http:HttpClient */private db:AngularFirestore) {
    this.newscollection=this.db.collection('news');
    
   }
  
  getNews():Observable<News[]>{
    /* return this.http.get<News[]>(this._url); */
    this.news= this.newscollection.snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as News;
        data.id=a.payload.doc.id;
        return data;
      });
    }));
    return this.news;
  }

  addNews(news:News){
    this.newscollection.add(news);
  }
}


