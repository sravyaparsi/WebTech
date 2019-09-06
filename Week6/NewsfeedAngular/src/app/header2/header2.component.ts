import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import {SourcesService} from '../sources.service';
import { NewsContentComponent } from '../news-content/news-content.component';


@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css'],
  providers: [SourcesService,NewsContentComponent]
})
export class Header2Component implements OnInit {
  selectedName:string
  news=[]
   @Output() sourceSelected : EventEmitter<string>=new EventEmitter<string>();
  constructor(private _sources:SourcesService,private _newsContent:NewsContentComponent) {
  
  }
  ngOnInit() {
    
    var data=this._sources.getSources().subscribe(data=>{
      this.news=data
      console.log("hi")
      console.log(this.news)
    })
  }

    processSelectedValue(){
      this.sourceSelected.emit(this.selectedName)
      this._sources.changeSelectedSource(this.selectedName)
       this._newsContent.getArticles();
  }


}

