import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent implements OnInit {
  displayname="BBC"
  constructor() {
   
   }
   
  
  ngOnInit() {
   
  }
  DisplaySourceName($event){
    this.displayname=$event;
  }
}
