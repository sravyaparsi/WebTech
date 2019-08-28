import {dynamicContentAdd} from './AddContent.js'
import '@babel/polyfill';
import 'isomorphic-fetch';


export default function dropdownselect(){
    var results;
    var value=document.getElementById("select1").value;
    fetch(`https://newsapi.org/v1/articles?source=${value}&apiKey=3324402577ec4712aa2bc171b67e2428`)
        .then(response=>{
                response.json().then(data=>{
                    // console.log(data)
                    dynamicContentAdd(data.articles);
                })
        })
        .catch(function (error) {
            console.log('Request failed', error);
          })

        
}