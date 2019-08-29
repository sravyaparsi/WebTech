import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import {SourcesService} from '../sources.service';


@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css'],
  providers: [SourcesService]
})
export class Header2Component implements OnInit {
  selectedName:string
  news=[]
   @Output() sourceSelected : EventEmitter<string>=new EventEmitter<string>();
  constructor(private _sources:SourcesService) {
  
  }
  ngOnInit() {
    var data=this._sources.getsources().then(data=>{
      this.news=data
      console.log("hi")
      console.log(this.news)
    })
  }

  processSelectedValue():void{
      this.sourceSelected.emit(this.selectedName)
  }

}

