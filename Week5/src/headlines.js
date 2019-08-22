import {api} from './API';
 import { dynamicContentAdd } from './AddContent';
 import '@babel/polyfill';
 import 'isomorphic-fetch';
 

export function lazyload(){
    console.log("fsf")
    fetch(api.headlines)
    .then(response=>{
        response.json()
        .then(data=>{
            console.log(data)
            dynamicContentAdd(data.articles)
        })
    })
 }