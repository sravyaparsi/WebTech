import {api} from './API';
 import { dynamicContentAdd } from './AddContent';

export function lazyload(){
    fetch(api.headlines)
    .then(response=>{
        response.json()
        .then(data=>{
            console.log(data)
            dynamicContentAdd(data.articles)
        })
    })
 }