import{a as b,i as d,S as v}from"./assets/vendor-09d7c26e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const L="https://pixabay.com/api/",w="43441081-c9c9daac9af91d4227dda2db1";async function g(t,s){const{data:a}=await b(L,{params:{key:w,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:15}});return a}function p(t){return t.map(({tags:s,likes:a,views:o,comments:e,downloads:r,webformatURL:n,largeImageURL:y})=>`
        <li class="gallery-item">
                <a class="gallery-link" href="${y}" >
                   <img
                     class = "gallery-image"
                     src = "${n}"
                     alt = "${s}"
                     />
                 </a>
                 <div class = "wrapper">
                 <div class = "parameters">
                 <span class ="title">Likes</span>
                 <span class = "info">${a}</span>
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
                 <span class = "info">${r}</span>
                 </div></div>
            </li>`).join("")}function S(t){t.style.display="block"}function h(t){t.style.display="none"}const l=document.querySelector(".forma"),u=document.querySelector(".css-loader"),m=document.querySelector(".gallery"),i=document.querySelector(".load-more-btn");l.addEventListener("submit",C);let c=1;h(u);async function C(t){t.preventDefault(),m.innerHTML="",console.log(t.target.elements);const{search__images:s}=t.target.elements;if(console.log(s.value),sessionStorage.setItem("text",s.value.trim()),s.value===""){l.reset(),i.classList.replace("load-more","btn-hidden"),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});return}S(u);try{const a=await g(s.value,c);if(console.log(a),a.hits.length===0){l.reset(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});return}l.reset(),m.insertAdjacentHTML("beforeend",p(a.hits)),f.refresh();const o=Math.ceil(a.totalHits/15);if(c<o)i.classList.replace("btn-hidden","load-more");else{alert("We're sorry, but you've reached the end of search results.");return}}catch{l.reset(),d.error({message:"Sorry, there was an error while searching for images. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"})}finally{h(u)}}i.addEventListener("click",q);async function q(){i.disabled=!0,c+=1;try{const t=sessionStorage.getItem("text"),s=await g(t,c);m.insertAdjacentHTML("beforeend",p(s.hits)),i.disabled=!1;const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:o*2,behavior:"smooth"})}catch(t){alert(t.message)}data.hits.length<15&&i.classList.add("btn-hidden"),f.refresh()}const f=new v(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map
