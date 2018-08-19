import { Component, OnInit, Input } from '@angular/core';
import { News } from '../news.model';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.css']
})
export class SingleNewsComponent implements OnInit {
  @Input() news : News;
  constructor() { }

  ngOnInit() {
  }

}
