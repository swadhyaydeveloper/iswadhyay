import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../news/news.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  _url = "/assets/data/news.json";
  constructor(private http:HttpClient) { }
  
  getNews():Observable<News[]>{
    return this.http.get<News[]>(this._url);
  }
}
