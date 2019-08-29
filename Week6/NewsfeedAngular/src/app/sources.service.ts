import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SourcesService {
  
  constructor() {
  }
    getArticles= async () => {
    const response = await fetch('https://newsapi.org/v1/articles?source=the-verge&apiKey=3324402577ec4712aa2bc171b67e2428');
    const json = await response.json();
    return json
  }

  getsources(): Observable<any>{
    
  }
  // async getArticles() {
  //  await fetch("https://newsapi.org/v1/articles?source=the-verge&apiKey=3324402577ec4712aa2bc171b67e2428").then(response=>{
  //          response.json().then(data=>{
              
  //           // this.data=data.articles
  //           // // console.log(this.data)
  //           // console.log(this.data)
  //           return data;
  //         })
  //     })
   
  // }

}
