// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

let newsDiv= document.getElementById("news");

async function getNews(){
    try {
        let res= await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code}")
        let data= await res.json();
        let news= data.articles;
        appendnews(news);
    } catch(e) {
        console.log(e);
    }
}
getNews();

function appendnews(newsIn){
    newsIn.forEach(news) => {
        let newsDiv= document.createElement("div");
        newsDiv.classList.add("news");
        newsDiv.innerHTML= `
            <div class="news-img">
                <img src="${news.urlToImage}" alt="${news.title}">
            </div>
            <div class="news-desc">
                <h2><a href="${news.url}">${news.title}</a></h2>
                <p>${news.description}</p>
            </div>
        `;
        news.appendChild(newsDiv);
    }
}

if(localStorage.getItem("news")==null) {
    localStorage.setItem("news", JSON.stringify([]));
}

function shownews(news){
    let myNews= JSON.parse(localStorage.getItem("news"));
    myNews.push(news);

    localStorage.setItem("news", JSON.stringify(myNews));

    setTimeout(() => {
        window.location.href= "news.html";
    }   , 1500);

    if(localStorage.getItem("seach_news")==null){
        localStorage.setItem("seach_news", JSON.stringify([]));
    }

    function seach_news(){
        let search = document.getElementById("search").value;
        let arr = JSON.parse(localStorage.getItem("seach_news"));

      if(search!== ""){
        arr.push(search);
        // localStorage.setItem("seach_news", JSON.stringify(arr));
      }
      localStorage.setItem("seach_news", JSON.stringify(arr));

        setTimeout(() => {
            window.location.href= "search.html";
        },1500);


    }

}



// !! my aobve code shown erroe so restrating again


// import {navbar} from ".../components/navbar.js";

// let na = document.getElementById("results");
// na.innerHTML= navbar();

// let search_news= async(e)=>{

//     try{
//         let value= document.getElementById("search").value;
//         console.log(value);
//         let url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}";
//         let res= await fetch(url);
//         let data= await res.json();

//         append(data)
//     } catch(err){
//         console.log(err);
//     }
// }

// let ids;
// function debounce(func, delay){
//     if(ids){
//         clearTimeout(ids);
//     }
//     ids=setTimeout(function(){
//         func();
//     }, delay);
// }

// document.getElementById("search").addEventListener("keypress", function(){
//     debounce(search_news, 1000);
// });

// let append= (data)=>{
//     let v= document.getElementById("navbar");
//     v.innerHTMl="";
//     v.style.display="grid";
//     v.style.gridTemplateColumns="
//     repeat(4, 1fr)";
//     v.style.gap=2%;
//     console.log(data);
//     data.news.forEach(({title, urlToImage, url})=>{
//         let newsDiv= document.createElement("div");
//         newsDiv.classList.add("news");
//         newsDiv.innerHTML= `
//             <div class="news-img">
//                 <img src="${urlToImage}" alt="${title}">
//             </div>
//             <div class="news-desc">
//                 <h2><a href="${url}">${title}</a></h2>
//             </div>
//         `;
//         v.appendChild(newsDiv);
//     })
// }