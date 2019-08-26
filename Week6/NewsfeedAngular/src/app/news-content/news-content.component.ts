import { Component, OnInit } from '@angular/core';
import {SourcesService} from '../sources.service'


@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css'],
  
})
export class NewsContentComponent implements OnInit {
  data:object
  ngOnInit(){

  }
  constructor( private _sourceservice: SourcesService) {
    this.data=_sourceservice.getArticles();
    console.log(this.data);
   }
    
 
}
