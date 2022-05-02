// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar()

import { getData,append } from "./fetch.js";

//let query = document.getElementById("search_input").value;
        
        const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`;

        getData(url).then((res)=>{
            const container = document.getElementById("results");

            append(res.articles,container)
        })

        let sidebarC = document.getElementById("sidebar").children;
        
        function Csearch(){
            console.log(this.id)
            const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`;

            getData(url).then((res)=>{
                const container = document.getElementById("results");

                append(res.articles,container)
                
            })
        }
        
        for(let el of sidebarC){
            el.addEventListener("click",Csearch)
        }

const enter = (e)=>{
    if(e.key=="Enter"){
        let query = document.getElementById("search_input").value;
        
        const url = `https://masai-mock-api.herokuapp.com/news?q=${query}`;

        getData(url).then((res)=>{
            const container = document.getElementById("results");

            append(res.articles,container)
            
            localStorage.setItem("news",JSON.stringify(res.articles))
            window.location.href="search.html"
        })
        
    }
}
document.getElementById("search_input").addEventListener("keydown",enter)

