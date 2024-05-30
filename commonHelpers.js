import{a as b,i as d,S as L}from"./assets/vendor-09d7c26e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const v="https://pixabay.com/api/",w="43441081-c9c9daac9af91d4227dda2db1";async function p(t,s){const{data:r}=await b(v,{params:{key:w,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:15}});return r}function u(t){return t.map(({tags:s,likes:r,views:o,comments:e,downloads:a,webformatURL:l,largeImageURL:y})=>`
        <li class="gallery-item">
                <a class="gallery-link" href="${y}" >
                   <img
                     class = "gallery-image"
                     src = "${l}"
                     alt = "${s}"
                     />
                 </a>
                 <div class = "wrapper">
                 <div class = "parameters">
                 <span class ="title">Likes</span>
                 <span class = "info">${r}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Views</span>
                 <span class = "info">${o}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Comments</span>
                 <span class = "info">${e}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Downloads</span>
                 <span class = "info">${a}</span>
                 </div></div>
            </li>`).join("")}function S(t){t.style.display="block"}function f(t){t.style.display="none"}const c=document.querySelector(".forma"),g=document.querySelector(".css-loader"),m=document.querySelector(".gallery"),i=document.querySelector(".load-more-btn");c.addEventListener("submit",C);let n=1500;f(g);async function C(t){t.preventDefault(),m.innerHTML="",console.log(t.target.elements);const{search__images:s}=t.target.elements;if(console.log(s.value),sessionStorage.setItem("text",s.value.trim()),n=1,s.value===""){c.reset(),i.classList.replace("load-more","btn-hidden"),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});return}S(g);try{const r=await p(s.value,n);if(console.log(r),r.hits.length===0){c.reset(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});return}c.reset(),m.insertAdjacentHTML("beforeend",u(r.hits)),h.refresh();const o=Math.ceil(r.totalHits/15);n<o&&i.classList.replace("btn-hidden","load-more"),n>=o&&i.classList.replace("load-more","btn-hidden")}catch{c.reset(),d.error({message:"Sorry, there was an error while searching for images. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"})}finally{f(g)}}i.addEventListener("click",q);async function q(){i.disabled=!0;try{const t=sessionStorage.getItem("text");n+=1;const s=await p(t,n);m.insertAdjacentHTML("beforeend",u(s.hits)),i.disabled=!1,s.hits.length<15&&i.classList.add("btn-hidden"),h.refresh();const r=document.querySelector(".gallery-item");console.log(r);const o=r.getBoundingClientRect().height;window.scrollBy({left:0,top:o*2,behavior:"smooth"})}catch(t){alert(t.message)}}const h=new L(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map
