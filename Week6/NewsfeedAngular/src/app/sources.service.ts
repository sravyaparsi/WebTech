import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SourcesService {
  sourceobserver:Observable<any>
  constructor() {
  }
    getArticles= async ( value:string) => {
      console.log(value)
    const response = await fetch(`https://newsapi.org/v1/articles?source=${value}&apiKey=3324402577ec4712aa2bc171b67e2428`);
    const json = await response.json();
    return json
  }

  getSources():Observable<any>{
    this.sourceobserver=Observable.create(observer=>{
      fetch('https://newsapi.org/v1/sources?language=en')
      .then(response=> response.json())
      .then(data=>{
    
         observer.next(data) 
         observer.complete()
      })
      .catch(err => observer.error(err));
  
    });
    return this.sourceobserver
  }

 private selectedSource=new BehaviorSubject('the-verge');
 currentSelectedSource=this.selectedSource.asObservable();


 changeSelectedSource( _message:string){
   console.log(_message)
   this.selectedSource.next(_message)
   
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
