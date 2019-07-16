
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
        userEvents.appendChild(email)
        userEvents.appendChild(subscribe)
        var element = document.getElementById("main");
       
        title=  createElement("div","title","NEWSFEED. yet another newsfeed");
        
        element.appendChild(title);

        var titles=["Title one","Title Two","Tilte Three","Title Four", "Title Five", "Title Six", "Title Seven", "Tilte Eight","Title Nine","Title Ten"];
        for(let i=0;i<10;i++){
                date=createElement("div","date",`${titles[i]}`);
                post=createElement("i",null, `Posted on: 26/06/19 // category: ${titles[i]}`);
                news= createElement("div","news","");
                para=createElement("p",null,"News Feed highlights information that includes profile changes, upcoming events, and birthdays, among other updates. Using a proprietary method, Facebook selects a handful of updates to show users every time they visit their feed");

                button=createElement("button","readButton","continue Reading");
                button.addEventListener("click",function(){
            alert("News Feed highlights information that includes profile changes, upcoming events, and birthdays, among other updates. Using a proprietary method, Facebook selects a handful of updates to show users every time they visit their feed");
                });
                var newsfeed=document.createElement("div");
                newsfeed.className="newsfeed";

                newsfeed.id=i+1;

                var picture=createElement("img","picture","");
                picture.setAttribute("src","Image.jpg");
                news.appendChild(date);
                news.appendChild(post);
                news.appendChild(para);
                news.appendChild(button);

                newsfeed.appendChild(picture);
                newsfeed.append(news);
               
                if(i==0)
                    element.appendChild(userEvents);
                element.appendChild(newsfeed);
                
       
                option = document.createElement("option");
               
                option.text = `${i+1}`;
                selectList.options.add(option,i+1);
        }
        var button=document.getElementsByClassName("read").value;
        var footer=createElement("div","footer","@newsfeed 2019");
        element.appendChild(footer);
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
        var option = document.createElement("option");
        selectList.className="dropdown";
        selectList.id="select1";
        option.text = "ALL";
        selectList.addEventListener('change',function(){  dropdownselect();});
        selectList.options.add(option);
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

        var appBanners = document.getElementsByClassName('newsfeed');
        

        for (var i = 0; i < appBanners.length; i ++) {
            if(i==value-1)
                appBanners[i].style.display = 'block';
            else{
                appBanners[i].style.display = 'none';
            }
            
            if(value=="ALL"){
                if(appBanners[i].style.display == 'none'){

                    appBanners[i].style.display = 'block';
                }
               
            }
        }
       
}