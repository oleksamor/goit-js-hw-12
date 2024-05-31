import{a as w,i as u,S as L}from"./assets/vendor-09d7c26e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const S="https://pixabay.com/api/",v="43441081-c9c9daac9af91d4227dda2db1";async function f(t,o=1){const{data:s}=await w(S,{params:{key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:15}});return s}function g(t){return t.map(({tags:o,likes:s,views:a,comments:e,downloads:r,webformatURL:l,largeImageURL:b})=>`
        <li class="gallery-item">
                <a class="gallery-link" href="${b}" >
                   <img
                     class = "gallery-image"
                     src = "${l}"
                     alt = "${o}"
                     />
                 
                 <div class = "wrapper">
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
                            <p class = "info">${r}</p>
                            </li>
                    
                        </ul>
                    </div>
                    </a>
            </li>`).join("")}function C(t){t.style.display="block"}function h(t){t.style.display="none"}const n=document.querySelector(".forma"),p=document.querySelector(".css-loader"),m=document.querySelector(".gallery"),d=document.querySelector(".load-more-btn");n.addEventListener("submit",P);d.addEventListener("click",k);let i=1,c="";h(p);async function P(t){i=1,t.preventDefault(),m.innerHTML="";const{search__images:o}=t.target.elements;if(c=o.value.trim(),c===""){n.reset(),d.classList.replace("load-more","btn-hidden"),u.error({message:"Sorry, field must not be empty. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});return}C(p);try{const s=await f(c,i);if(s.hits.length===0){n.reset(),u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});return}n.reset(),m.insertAdjacentHTML("beforeend",g(s.hits)),y.refresh();const a=Math.ceil(s.totalHits/15);if(i<a)d.classList.replace("btn-hidden","load-more");else{alert("We're sorry, but you've reached the end of search results.");return}}catch{n.reset(),u.error({message:"Sorry, there was an error while searching for images. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"})}finally{h(p)}}async function k(){i+=1;try{const t=await f(c,i);m.insertAdjacentHTML("beforeend",g(t.hits)),y.refresh();const o=Math.ceil(t.totalHits/15);i>=o&&(d.classList.replace("load-more","btn-hidden"),alert("We're sorry, but you've reached the end of search results"));const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"})}catch(t){alert(t.message)}}const y=new L(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map
