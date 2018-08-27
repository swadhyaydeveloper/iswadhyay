import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {News} from '../news.model'
import { NewsService } from '../../services/news.service'

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  newsAdded = new EventEmitter<News>();
  news : News={}
  title:string;
  title_description:string;
  date:string;
  img:string;
  description:string;
  constructor(private _newsservice : NewsService) { }

  ngOnInit() {
  }

  addNews(){
    /* this.news={title:this.title,title_description:this.title_description,date:this.date,img:this.img,description:this.description};
    this.newsAdded.emit(this.news); */
    /* console.log(this.news) */
    this._newsservice.addNews(this.news)
    /* this.title="";
    this.title_description="";
    this.date="";
    this.img="";
    this.description=""; */
    this.news={}
  }
}
