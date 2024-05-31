import{a as b,i as d,S as w}from"./assets/vendor-09d7c26e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const L="https://pixabay.com/api/",S="43441081-c9c9daac9af91d4227dda2db1";async function m(t,s){const{data:a}=await b(L,{params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:15}});return a}function g(t){return t.map(({tags:s,likes:a,views:o,comments:e,downloads:r,webformatURL:l,largeImageURL:y})=>`
        <li class="gallery-item">
                <a class="gallery-link" href="${y}" >
                   <img
                     class = "gallery-image"
                     src = "${l}"
                     alt = "${s}"
                     />
                 
                 <div class = "wrapper">
                      <ul class ="wrapper-info ">
                            <li class = "likes">
                            <p class ="title">Likes</p>
                            <p class = "info">${a}</p>
                            </li>
                            <li class = "views">
                            <p class ="title">Views</p>
                            <p class = "info">${o}</p>
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
            </li>`).join("")}function C(t){t.style.display="block"}function f(t){t.style.display="none"}const n=document.querySelector(".forma"),u=document.querySelector(".css-loader"),p=document.querySelector(".gallery"),i=document.querySelector(".load-more-btn");n.addEventListener("submit",v);let c=1;f(u);async function v(t){t.preventDefault(),p.innerHTML="";const{search__images:s}=t.target.elements,a=s.value.trim();if(a===""){n.reset(),i.classList.replace("load-more","btn-hidden"),d.error({message:"Sorry, field must not be empty. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});return}C(u);try{const o=await m(a,c);if(console.log(o),o.hits.length===0){n.reset(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});return}n.reset(),p.insertAdjacentHTML("beforeend",g(o.hits)),h.refresh();const e=Math.ceil(o.totalHits/15);if(c<e)i.classList.replace("btn-hidden","load-more");else{alert("We're sorry, but you've reached the end of search results.");return}}catch{n.reset(),d.error({message:"Sorry, there was an error while searching for images. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"})}finally{f(u)}}i.addEventListener("click",P);async function P(){i.disabled=!0,c+=1;try{const t=sessionStorage.getItem("text"),s=await m(t,c);p.insertAdjacentHTML("beforeend",g(s.hits)),i.disabled=!1;const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:o*2,behavior:"smooth"})}catch(t){alert(t.message)}data.hits.length<15&&i.classList.add("btn-hidden"),h.refresh()}const h=new w(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map
