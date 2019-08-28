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
    
    var data=_sources.getsources().then(data=>{
      this.news=data
      console.log("hi")
      console.log(this.news)
    })
   }
   
  
  ngOnInit() {
   
  }

}
