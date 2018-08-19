import { Component, OnInit } from '@angular/core';
import { News } from '../news/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news : News[] = [new News("THE TITLE HEADING","Title Description","Dec 12,2018","https://media.istockphoto.com/photos/plant-growing-picture-id510222832?k=6&m=510222832&s=612x612&w=0&h=Pzjkj2hf9IZiLAiXcgVE1FbCNFVmKzhdcT98dcHSdSk=","lick on both to understand how they differ from each other. The accordion will push down the content, while the dropdown lays over the content.")];
  constructor() { }

  ngOnInit() {
  }

  onNewsAdded(news:News){
    this.news.push(news);
  }

}
