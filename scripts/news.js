// Ude Import export (MANDATORY)

import   {navbar}from "../components/navbar.js";
let na=document.getElementById("navbar");
na.innerHTML=navbar();
let dataa=JSON.parse(localStorage.getItem("news"))||[];