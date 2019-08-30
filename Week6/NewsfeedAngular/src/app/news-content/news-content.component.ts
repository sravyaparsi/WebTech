import { Component, OnInit } from '@angular/core';
import {SourcesService} from '../sources.service'


@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css'],
  
})
export class NewsContentComponent implements OnInit {
  data={}
  private selectedSource
  ngOnInit(){

  }
  constructor( private _sourceservice: SourcesService) {
    _sourceservice.currentSelectedSource.subscribe(data=>{
      this.selectedSource=data
      console.log(data)
    })
     _sourceservice.getArticles(this.selectedSource).then(data=>{
     
       this.data=data
       console.log(typeof(data.articles))
     })
    //  this.data=this.data.articles[0].urlToImage;
   }
}
