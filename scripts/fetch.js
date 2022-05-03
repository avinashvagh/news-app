let searchI= async (value)=>{
       let value =document.getElementById("search_input").value;
    try{
       let res= await fetch(
        `https://masai-mock-api.herokuapp.com/news?q=${value}`     
       )
       let dat=await res.json()
       console.log(dat);
       return dat;
    }catch(err){
        console.log(err);
    }
}


let append=(dat,result)=>{
    console.log(dat.articles[0].title)
   
 dat.articles.forEach(({title,urlToImage,content})=>{
     
     let div=document.createElement("div");
     div.style.display="flex";
     div.style.margin="15px 2px"
     div.style.border="2px solid blue"
     let img =document.createElement("img");
       let box=document.createElement("div");
       box.style.margin="0px 10px"
     let h3=document.createElement("h3")
     let p=document.createElement("p");
     p.innerText=content;
     img.src=urlToImage;
     img.style.width="25%";
     img.style.height="100%";
     h3.innerText=title;
     box.append(h3,p);
     div.append(img,box);
    result.append(div);
    })

}


export {searchI,append};