import {validateemail} from './validateemail.js'
import dropdownselect from './UserSelect.js'
import './style.css'
import {api} from './API'
import '@babel/polyfill';
import 'isomorphic-fetch';


function createDOM(){
       var userEvents=createElement("div","event","");
        var selectList=CreateDropDown();
        var text=createElement("div",null,"SELECT CATEGORY");
        var email=createElement("input","email","");
        email.id="emailid"
        email.addEventListener("blur", function(){
            validateemail();
        });

        var subscribe=createElement("button","button","Subscribe");
        userEvents.appendChild(text)
        userEvents.appendChild(selectList)
        var element = document.createDocumentFragment();
       
        var title=  createElement("div","title","NEWSFEED. yet another newsfeed");
       
        element.appendChild(title);

        var usersubscribe= createElement("div","usersubscribe","");
        usersubscribe.appendChild(email);
        usersubscribe.appendChild(subscribe);
        title.appendChild(usersubscribe);

        for(let i=0;i<50;i++){
                var date=createElement("div","date","");
                var post=createElement("i","publish", "");
                let news= createElement("div","news","");
                let para=createElement("p","description","");
                let button=createElement("button","readButton","continue Reading");
            
                var newsfeed=document.createElement("div");
                newsfeed.className="newsfeed";

                newsfeed.id=i+1;

                var picture=createElement("img","picture","");

                news.appendChild(date);
                news.appendChild(post);
                news.appendChild(para);
                news.appendChild(button);

                newsfeed.appendChild(picture);
                newsfeed.appendChild(news);
               
                if(i==0)
                    element.appendChild(userEvents);
                element.appendChild(newsfeed);
                document.getElementById("main").appendChild(element);
                newsfeed = document.getElementsByClassName('newsfeed');
                newsfeed[i].style.display = 'none';
        }
       
        var button=document.getElementsByClassName("read").value;
        var footer=createElement("div","footer","@newsfeed 2019");
        element.appendChild(footer);
        document.addEventListener('DOMContentLoaded', function() {
            console.log(document.getElementById("select1").value)
         }, true);
}

createDOM();

function CreateDropDown(){
    var selectList=document.createElement("select");
    var option=document.createElement("option");
    option.text="--please select--"
    selectList.options.add(option)
    selectList.options[0].disabled=true
    fetch(api.sources).then(response=>{
        response.json().then(data=>{
            for(let j=0;j<data.sources.length;j++){
                var option= document.createElement("option");
                option.text=data.sources[j].name;
                option.value=data.sources[j].id;
                selectList.options.add(option);
                console.log(data.sources[j].id)
            }
        });    
    });
    selectList.className="dropdown";
    selectList.id="select1";
    selectList.addEventListener('change',function(){  dropdownselect();});
    return selectList
}

function createElement(e, classname,text){
        var para = document.createElement(e);
        para.className= classname;
        var node = document.createTextNode(text);
        para.appendChild(node);

        return para;
}

var headlines=document.getElementById('headlines')

  headlines.addEventListener('click', function(){
    console.log("started calling headlines");
    import(/* webpackChunkName: "chunk1" */'./headlines.js').then(module=>{
        console.log("inside import js")
        module.lazyload();
    })
})

 



