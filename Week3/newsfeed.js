
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
       
        title=  createElement("div","title","NEWSFEED. yet another newsfeed");
       
        element.appendChild(title);

        var usersubscribe= createElement("div","usersubscribe","");
        usersubscribe.appendChild(email);
        usersubscribe.appendChild(subscribe);
        title.appendChild(usersubscribe);

        for(let i=0;i<10;i++){
                date=createElement("div","date","");
                post=createElement("i","publish", "");
                news= createElement("div","news","");
                para=createElement("p","description","");
                button=createElement("button","readButton","continue Reading");
            
                var newsfeed=document.createElement("div");
                newsfeed.className="newsfeed";

                newsfeed.id=i+1;

                var picture=createElement("img","picture","");

                news.appendChild(date);
                news.appendChild(post);
                news.appendChild(para);
                news.appendChild(button);

                newsfeed.appendChild(picture);
                newsfeed.append(news);
               
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


function validateemail(){
    let emailId = document.getElementById("emailid").value;
  
    //regular expression to validate email id.
    let emailRegex = /^[a-z0-9._]+@[a-z0-9]+.[a-z]{2,3}/;

    if (emailRegex.test(emailId)) {
        //if email id is valid then saving it to local storag.
        localStorage.setItem("EmailId", emailId);
        alert("subscribed");
    } else {
        alert("Invalid EmailId");
    }
};


function CreateDropDown(){
    var selectList=document.createElement("select");
    option=document.createElement("option");
    option.text="--please select--"
    selectList.options.add(option)
    selectList.options[0].disabled=true
    fetch("https://newsapi.org/v1/sources?language=en").then(response=>{
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
function dropdownselect(){
        var value=document.getElementById("select1").value;
        fetch(`https://newsapi.org/v1/articles?source=${value}&apiKey=3324402577ec4712aa2bc171b67e2428`)
            .then(response=>{
                    response.json().then(data=>{
                        console.log(data)
                        dynamicContentAdd(data.articles);
                    })
            })
            .catch(function (error) {
                console.log('Request failed', error);
              })
            
}

function dynamicContentAdd(articles){
    let newsfeed = document.getElementsByClassName('newsfeed');
    var i;
    for( i=0;i<articles.length;i++){
        newsfeed[i].style.display = 'block';
        document.getElementsByClassName("date")[i].innerText=articles[i].title;
        document.getElementsByClassName("publish")[i].innerText=`Author: ${articles[i].author} PublishedAt: ${articles[i].publishedAt}`
        document.getElementsByClassName("description")[i].innerText=articles[i].description;
       
        document.getElementsByClassName("picture")[i].setAttribute("src",`${articles[i].urlToImage}`)
             
        console.log(articles)
        document.getElementsByClassName("readButton")[i].addEventListener("click",()=>{
            window.location.href = `${articles[i].url}`;
        });
    }
    if(articles.length<10){
        for(i;i<10;i++){
            newsfeed[i].style.display='none';
        }
    }
    

}