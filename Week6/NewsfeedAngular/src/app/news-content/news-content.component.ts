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
    
    //  this.data=this.data.articles[0].urlToImage;
   }

   getArticles(){
    this._sourceservice.currentSelectedSource.subscribe(data=>{
      this.selectedSource=data
      console.log(data)
    })
     this._sourceservice.getArticles(this.selectedSource).then(data=>{
     
       this.data=data
       console.log("news")
       console.log(data)
       console.log("newsonctent"+typeof(data.articles))
     })
   }
}
