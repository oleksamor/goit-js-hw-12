import{a as b,i as d,S as w}from"./assets/vendor-09d7c26e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const L="https://pixabay.com/api/",S="43441081-c9c9daac9af91d4227dda2db1";async function m(t,r){const{data:s}=await b(L,{params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:15}});return s}function p(t){return t.map(({tags:r,likes:s,views:a,comments:e,downloads:o,webformatURL:l,largeImageURL:y})=>`
        <li class="gallery-item">
                <a class="gallery-link" href="${y}" >
                   <img
                     class = "gallery-image"
                     src = "${l}"
                     alt = "${r}"
                     />
                 
                 <div class = "container">
                      <ul class ="wrapper-info ">
                            <li class = "likes">
                            <p class ="title">Likes</p>
                            <p class = "info">${s}</p>
                            </li>
                            <li class = "views">
                            <p class ="title">Views</p>
                            <p class = "info">${a}</p>
                            </li>
                            <li class = "comments">
                            <p class ="title">Comments</p>
                            <p class = "info">${e}</p>
                            </li>
                            <li class = "downloads">
                            <p class ="title">Downloads</p>
                            <p class = "info">${o}</p>
                            </li>
                    
                        </ul>
                    </div>
                    </a>
            </li>`).join("")}function v(t){t.style.display="block"}function f(t){t.style.display="none"}const n=document.querySelector(".forma"),u=document.querySelector(".css-loader"),g=document.querySelector(".gallery"),i=document.querySelector(".load-more-btn");n.addEventListener("submit",C);let c=1;f(u);async function C(t){t.preventDefault(),g.innerHTML="",console.log(t.target.elements);const{search__images:r}=t.target.elements;if(console.log(r.value),sessionStorage.setItem("text",r.value.trim()),r.value===""){n.reset(),i.classList.replace("load-more","btn-hidden"),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});return}v(u);try{const s=await m(r.value,c);if(console.log(s),s.hits.length===0){n.reset(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});return}n.reset(),g.insertAdjacentHTML("beforeend",p(s.hits)),h.refresh();const a=Math.ceil(s.totalHits/15);if(c<a)i.classList.replace("btn-hidden","load-more");else{alert("We're sorry, but you've reached the end of search results.");return}}catch{n.reset(),d.error({message:"Sorry, there was an error while searching for images. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"})}finally{f(u)}}i.addEventListener("click",q);async function q(){i.disabled=!0,c+=1;try{const t=sessionStorage.getItem("text"),r=await m(t,c);g.insertAdjacentHTML("beforeend",p(r.hits)),i.disabled=!1;const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"})}catch(t){alert(t.message)}data.hits.length<15&&i.classList.add("btn-hidden"),h.refresh()}const h=new w(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map
