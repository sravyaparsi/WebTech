import { Component, OnInit } from '@angular/core';
import {SourcesService} from '../sources.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [SourcesService]
})
export class HeaderComponent implements OnInit {
  news=[]
  constructor(private _sources:SourcesService) {
    console.log("hi")
    var data=_sources.getsources().then(data=>{
      this.news=data.sources
      console.log(this.news)
    })
   }
  
  ngOnInit() {
   
  }

}
