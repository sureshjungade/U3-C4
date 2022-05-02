// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar()

import { getData,append } from "./fetch.js";



let Data = JSON.parse(localStorage.getItem("divdata"));
console.log(Data)

    const container = document.getElementById("detailed_news");

    append(Data,container)

    const enter = (e)=>{
        if(e.key=="Enter"){
            let query = document.getElementById("search_input").value;
            
            const url = `https://masai-mock-api.herokuapp.com/news?q=${query}`;
    
            getData(url).then((res)=>{
                const container = document.getElementById("detailed_news");
    
                append(res.articles,container)
                localStorage.setItem("news",JSON.stringify(res.articles))
                window.location.href="search.html"
            })
            
        }
    }
    document.getElementById("search_input").addEventListener("keydown",enter)
