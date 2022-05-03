// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
let na = document.getElementById("navbar");
na.innerHTML = navbar();

let search = (e) => {
  if (e.key === "Enter") {
    window.location.href = "search.html";
    let value = document.getElementById("search_input").value;
    searchI(value).then((dat) => {
      console.log(dat);
      let result = document.getElementById("results");
      result.innerHTML = "";
      append(dat, result);
    });
  }
};
document.getElementById("search_input").addEventListener("keydown", search);

let sbar = document.getElementById("sidebar").children;

async function cSearch() {
  console.log(this.id);
  try {
    let res = await fetch(
      `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`
    );
    let data = await res.json();
    // console.log(data);
    append(data);
  } catch (err) {
    console.log(err);
  }
}

for (let el of sbar) {
  el.addEventListener("click", cSearch);
}

let append = (data) => {
  console.log(data.articles[0].title);
  let result = document.getElementById("results");
  result.innerHTML = "";
  data.articles.forEach(({ title, urlToImage, content }) => {
    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.margin = "15px 2px";
    div.style.border = "1px solid black";
    let img = document.createElement("img");
    let box = document.createElement("div");
    box.style.margin = "0px 10px";
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    p.innerText = content;
    img.src = urlToImage;
    img.style.width = "25%";
    img.style.height = "100%";
    h3.innerText = title;
    box.append(h3, p);

    div.append(img, box);
    result.append(div);
  });
};
