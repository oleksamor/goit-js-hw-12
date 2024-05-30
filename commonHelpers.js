import{a as b,i as d,S as v}from"./assets/vendor-09d7c26e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const L="https://pixabay.com/api/",w="43441081-c9c9daac9af91d4227dda2db1";async function m(t,s){const{data:r}=await b(L,{params:{key:w,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:15}});return r}function p(t){return t.map(({tags:s,likes:r,views:a,comments:e,downloads:o,webformatURL:l,largeImageURL:y})=>`
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
                 <span class = "info">${a}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Comments</span>
                 <span class = "info">${e}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Downloads</span>
                 <span class = "info">${o}</span>
                 </div></div>
            </li>`).join("")}function S(t){t.style.display="block"}function h(t){t.style.display="none"}const c=document.querySelector(".forma"),g=document.querySelector(".css-loader"),u=document.querySelector(".gallery"),i=document.querySelector(".load-more-btn");c.addEventListener("submit",C);let n;h(g);async function C(t){t.preventDefault(),u.innerHTML="",console.log(t.target.elements);const{search__images:s}=t.target.elements;if(console.log(s.value),sessionStorage.setItem("text",s.value.trim()),n=1,s.value===""){c.reset(),i.classList.replace("load-more","btn-hidden"),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});return}S(g);try{const r=await m(s.value,n);if(console.log(r),r.hits.length===0){c.reset(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});return}c.reset(),u.insertAdjacentHTML("beforeend",p(r.hits)),f.refresh();const a=Math.ceil(r.totalHits/15);console.log(a,n),n<a?i.classList.replace("btn-hidden","load-more"):alert("We're sorry, but you've reached the end of search results.")}catch{c.reset(),d.error({message:"Sorry, there was an error while searching for images. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"})}finally{h(g)}}i.addEventListener("click",q);async function q(){i.disabled=!0;try{const t=sessionStorage.getItem("text");n+=1;const s=await m(t,n);u.insertAdjacentHTML("beforeend",p(s.hits)),i.disabled=!1,s.hits.length<15&&i.classList.add("btn-hidden"),f.refresh();const r=document.querySelector(".gallery-item");console.log(r);const a=r.getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"})}catch(t){alert(t.message)}}const f=new v(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map
