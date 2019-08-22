

export function dynamicContentAdd(articles){
    let newsfeed = document.getElementsByClassName('newsfeed');
    var i;
    for( i=0;i<articles.length;i++){
        newsfeed[i].style.display = 'block';
        document.getElementsByClassName("date")[i].innerText=articles[i].title;
        document.getElementsByClassName("publish")[i].innerText=`Author: ${articles[i].author} PublishedAt: ${articles[i].publishedAt}`
        document.getElementsByClassName("description")[i].innerText=articles[i].description;
       
        document.getElementsByClassName("picture")[i].setAttribute("src",`${articles[i].urlToImage}`)
             
        let s=`${articles[i].url}`
        document.getElementsByClassName("readButton")[i].addEventListener("click",()=>{
            
            window.location.href = s;
        });
    }
    if(articles.length<10){
        for(i;i<10;i++){
            newsfeed[i].style.display='none';
        }
    }
    

}