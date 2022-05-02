const getData = async (url)=>{

    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data)
        return data
    }
    catch(err){
        console.log(err)
    }
}

const append = (data,container) =>{
    container.innerHTML = null;

    data.map(({content,description,title,urlToImage})=>{
        let div1 = document.createElement("div")
        div1.setAttribute("class","news")
        div1.addEventListener("click", function(){
            let arr = [];
            arr.push({content,title,urlToImage})
            clickNews(arr)
        })
        let img = document.createElement("img")
        img.src=urlToImage;
        let childdiv = document.createElement("div")
        let p = document.createElement("p");
        p.innerText=description || content

        let h3 = document.createElement("h3")
        

        if(p.innerText==content){
            h3.innerText=title;
            div1.append(img,h3,p)
            container.append(div1)
            div1.style.display="block"
            div1.style.textAlign="center"
        }
        else{
            childdiv.append(h3,p)
            div1.append(img,childdiv)
            container.append(div1)
            h3.innerText=title;
        }
        
        
        
    })
    function clickNews(data) {
        localStorage.setItem("divdata",JSON.stringify(data))
        window.location.href="news.html"
    }
}

export {getData,append}