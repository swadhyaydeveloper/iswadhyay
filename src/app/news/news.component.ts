import { Component, OnInit } from '@angular/core';
import { News } from '../news/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news : News[] = [];
  constructor() { }

  ngOnInit() {
  }

  onNewsAdded(news:News){
    this.news.push(news);
  }

}
