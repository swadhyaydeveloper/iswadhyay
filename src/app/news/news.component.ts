import { Component, OnInit } from '@angular/core';
import { News } from '../news/news.model';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news : News[] = [];
  constructor(private _newsservice : NewsService) { }

  ngOnInit() {
    this._newsservice.getNews().subscribe(data => this.news=data);
  }

  onNewsAdded(news:News){
    this.news.push(news);
  }

}
