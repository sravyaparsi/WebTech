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
     _sourceservice.getArticles().then(data=>{this.data=data.articles[0]})
      console.log( this.data)
    //  this.data=this.data.articles[0].urlToImage;
   }
}
