import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SourcesService {
  data:object
  constructor() {
    
   }
   getArticles(){
    console.log("called")
      fetch("https://newsapi.org/v1/articles?source=the-verge&apiKey=3324402577ec4712aa2bc171b67e2428").then(response=>{
          response.json().then(data=>{
              
            this.data=data.articles
            console.log(this.data)
            return this.data
          })
      })
     
  }

}
