import{a as w,i as u,S as L}from"./assets/vendor-09d7c26e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const S="https://pixabay.com/api/",C="43441081-c9c9daac9af91d4227dda2db1";async function g(t,s){const{data:r}=await w(S,{params:{key:C,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:15}});return r}function f(t){return t.map(({tags:s,likes:r,views:a,comments:e,downloads:o,webformatURL:l,largeImageURL:b})=>`
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
                            <p class = "info">${r}</p>
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
            </li>`).join("")}function v(t){t.style.display="block"}function h(t){t.style.display="none"}const n=document.querySelector(".forma"),p=document.querySelector(".css-loader"),m=document.querySelector(".gallery"),i=document.querySelector(".load-more-btn");n.addEventListener("submit",P);let d=1,c="";h(p);async function P(t){t.preventDefault(),m.innerHTML="";const{search__images:s}=t.target.elements;if(c=s.value.trim(),c===""){n.reset(),i.classList.replace("load-more","btn-hidden"),u.error({message:"Sorry, field must not be empty. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});return}v(p);try{const r=await g(c,d);if(console.log(r.hits.length),r.hits.length===0){n.reset(),u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});return}n.reset(),m.insertAdjacentHTML("beforeend",f(r.hits)),y.refresh();const a=Math.ceil(r.totalHits/15);if(d<a)i.classList.replace("btn-hidden","load-more");else{alert("We're sorry, but you've reached the end of search results.");return}}catch{n.reset(),u.error({message:"Sorry, there was an error while searching for images. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"})}finally{h(p)}}i.addEventListener("click",k);async function k(){i.disabled=!0,d+=1;try{const t=await g(c,d);m.insertAdjacentHTML("beforeend",f(t.hits)),i.disabled=!1;const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:r*2,behavior:"smooth"})}catch(t){alert(t.message)}data.hits.length<15&&i.classList.add("btn-hidden"),y.refresh()}const y=new L(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map
