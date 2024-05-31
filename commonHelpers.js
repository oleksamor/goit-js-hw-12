import{a as w,i as p,S as L}from"./assets/vendor-09d7c26e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const S="https://pixabay.com/api/",C="43441081-c9c9daac9af91d4227dda2db1";async function g(t,s=1){const{data:o}=await w(S,{params:{key:C,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:15}});return o}function f(t){return t.map(({tags:s,likes:o,views:a,comments:e,downloads:r,webformatURL:l,largeImageURL:b})=>`
        <li class="gallery-item">
                <a class="gallery-link" href="${b}" >
                   <img
                     class = "gallery-image"
                     src = "${l}"
                     alt = "${s}"
                     />
                 
                 <div class = "wrapper">
                      <ul class ="wrapper-info ">
                            <li class = "likes">
                            <p class ="title">Likes</p>
                            <p class = "info">${o}</p>
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
                            <p class = "info">${r}</p>
                            </li>
                    
                        </ul>
                    </div>
                    </a>
            </li>`).join("")}function P(t){t.style.display="block"}function h(t){t.style.display="none"}const n=document.querySelector(".forma"),u=document.querySelector(".css-loader"),m=document.querySelector(".gallery"),c=document.querySelector(".load-more-btn");n.addEventListener("submit",v);c.addEventListener("click",k);let i=1,d="";h(u);async function v(t){t.preventDefault(),m.innerHTML="";const{search__images:s}=t.target.elements;if(d=s.value.trim(),d===""){n.reset(),c.classList.replace("load-more","btn-hidden"),p.error({message:"Sorry, field must not be empty. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});return}P(u);try{const o=await g(d,i);if(o.hits.length===0){n.reset(),p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});return}n.reset(),m.insertAdjacentHTML("beforeend",f(o.hits)),y.refresh();const a=Math.ceil(o.totalHits/15);if(i<a)c.classList.replace("btn-hidden","load-more");else{alert("We're sorry, but you've reached the end of search results.");return}}catch{n.reset(),p.error({message:"Sorry, there was an error while searching for images. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"})}finally{h(u)}}async function k(){c.disabled=!0,i+=1;try{const t=await g(d,i);m.insertAdjacentHTML("beforeend",f(t.hits)),y.refresh(),(i=Math.ceil(t.totalHits/15))&&(c.classList.replace("load-more","btn-hidden"),i=1);const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"})}catch(t){alert(t.message)}}const y=new L(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map
