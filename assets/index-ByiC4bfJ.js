var h=Object.defineProperty;var m=(n,e,t)=>e in n?h(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var c=(n,e,t)=>m(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const u=()=>{const n=document.querySelector(".modal--welcome"),e=document.querySelector(".modal--thanks"),t=document.querySelector(".header__welcome-text"),s=document.querySelector(".modal__form"),i=document.querySelector("[data-modal-overlay]"),r=localStorage.getItem("userName");r||(n.classList.remove("is-hidden"),i.classList.remove("is-hidden")),document.querySelectorAll("[data-modal-close]").forEach(a=>{a.addEventListener("click",()=>{const o=a.closest(".modal");d(o,i)})}),r?t.textContent=`Вітаємо,  ${r}!`:l(n,i),document.addEventListener("keydown",a=>{a.key==="Escape"&&d(n,i)}),i.addEventListener("click",()=>{d(n,i),d(e,i)}),t.addEventListener("click",()=>{l(n,i)}),s.addEventListener("submit",a=>{a.preventDefault();const o=s.querySelector("[data-modal-input]").value.trim();if(!/^[a-zA-Zа-яА-ЯёЁ]{4,20}$/.test(o)){alert("Введіть нікнейм від 4 до 20 символів без викростання спеціальних символів");return}localStorage.setItem("userName",o),t.textContent=`Вітаємо, ${o}!`,d(n,i)})},l=(n,e)=>{n.classList.remove("is-hidden"),document.body.style.overflow="hidden",e.classList.remove("is-hidden")},d=(n,e)=>{n.classList.add("is-hidden"),document.body.style.overflow="",e.classList.add("is-hidden")},g=()=>{const n=document.querySelector("[data-dropdown-open]"),e=document.querySelector("[data-dropdown]"),t=n.querySelector("[data-dropdown-arrow]");n.addEventListener("click",s=>{s.preventDefault(),e.classList.toggle("active"),t.classList.toggle("rotate")})};class f{constructor(){c(this,"themes",{dark:{src:"./src/img/themeDark.png",alt:"dark theme image",storageValue:"dark"},light:{src:"./src/img/themeLight.png",alt:"light theme image",storageValue:"light"}});c(this,"storageKey","theme");this.switchThemeBtn=document.querySelector("[data-theme-switcher]"),this.themeImg=this.switchThemeBtn.querySelector(".header__theme-img"),this.setInitialTheme(),this.bindEvents()}getCachedTheme(){return localStorage.getItem(this.storageKey)}setThemeToCache(e){localStorage.setItem(this.storageKey,e)}setInitialTheme(){const t=this.getCachedTheme()===this.themes.dark.storageValue;document.documentElement.classList.toggle("is-dark-theme",t),this.updateButtonImage(t?this.themes.dark:this.themes.light)}updateButtonImage(e){this.themeImg.src=e.src,this.themeImg.alt=e.alt}onClick(){const t=this.getCachedTheme()===this.themes.dark.storageValue,s=t?this.themes.light:this.themes.dark;this.setThemeToCache(s.storageValue),document.documentElement.classList.toggle("is-dark-theme",!t),this.updateButtonImage(s)}bindEvents(){this.switchThemeBtn.addEventListener("click",()=>this.onClick())}}class p{constructor(){this.form=document.querySelector("[data-biggNum-form]"),this.result=document.querySelector("[data-biggNum-result]"),this.inputs=document.querySelectorAll("[data-biggNum-input]"),this.init()}init(){if(!this.form||!this.result||this.inputs.length===0){console.error("Form, result element, or input not found.");return}this.form.addEventListener("submit",e=>{e.preventDefault();const t=Array.from(this.inputs).map(i=>parseFloat(i.value));if(t.some(isNaN)){this.result.textContent="Будь ласка, введіть коректні числа у всі поля";return}const s=Math.max(...t);this.result.textContent=`Найбільше число, яке ви ввели - ${s}`})}}class y{constructor(e){this.container=document.querySelector(e),this.slider=this.container.querySelector("[data-slider]"),this.cards=this.container.querySelectorAll("[data-slider-card]"),this.dotsContainer=this.container.querySelector("[data-slider-dots]"),this.prevBtn=this.container.querySelector("[data-slider-prev]"),this.nextBtn=this.container.querySelector("[data-slider-next]"),this.cardCount=6,this.activeIndex=0,this.init()}init(){this.createDots(),this.updateSlider(),this.bindEvents()}createDots(){if(!(this.dotsContainer.children.length>0))for(let e=0;e<this.cardCount;e++){const t=document.createElement("li");t.classList.add("our-team__dots-item");const s=document.createElement("button");s.classList.add("our-team__dot"),s.dataset.sliderDot=e,e===this.activeIndex&&s.classList.add("our-team__dot--active"),t.appendChild(s),this.dotsContainer.appendChild(t)}}updateSlider(){console.log(this.cards[0].offsetWidth);const e=-this.activeIndex*this.cards[0].offsetWidth;this.slider.style.transform=`translateX(${e}px)`,this.updateDots()}updateDots(){this.dotsContainer.querySelectorAll("[data-slider-dot]").forEach((e,t)=>{e.classList.toggle("our-team__dot--active",t===this.activeIndex)})}nextSlide(){this.activeIndex<this.cards.length-1&&(this.activeIndex++,this.updateSlider())}prevSlide(){this.activeIndex>0&&(this.activeIndex--,this.updateSlider())}goToSlide(e){this.activeIndex=e,this.updateSlider()}bindEvents(){this.prevBtn.addEventListener("click",()=>this.prevSlide()),this.nextBtn.addEventListener("click",()=>this.nextSlide()),this.dotsContainer.addEventListener("click",e=>{const t=e.target.closest("[data-slider-dot]");if(t){const s=parseInt(t.dataset.sliderDot,10);this.goToSlide(s)}})}}class S{constructor(){this.scientists=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}],this.btns=document.querySelectorAll("[data-scientists-btn]"),this.list=document.querySelector("[data-scientist-list]"),this.init()}init(){this.renderScientists(this.scientists),this.btns.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.scientistsBtn;let s=[];switch(t){case"1":s=this.filterByBornIn19thCentury();break;case"2":s=this.sortByName();break;case"3":s=this.sortByAge();break;case"4":s=[this.findYoungestScientist()];break;case"5":s=[this.scientists[0]];break;case"6":s=this.filterBySurnameStartingWith("C");break;case"7":s=this.filterByNameNotStartingWith("A");break;case"8":s=this.findOldestAndYoungestScientists();break;case"9":s=this.filterByMatchingInitials();break;default:console.log("Please choose a valid button.");return}this.renderScientists(s)})})}filterByBornIn19thCentury(){return this.scientists.filter(e=>e.born>1801&&e.born<1900)}sortByName(){return[...this.scientists].sort((e,t)=>e.name.localeCompare(t.name))}sortByAge(){return[...this.scientists].sort((e,t)=>e.dead-e.born-(t.dead-t.born))}findYoungestScientist(){return this.scientists.reduce((e,t)=>t.born>e.born?t:e)}filterBySurnameStartingWith(e){return this.scientists.filter(t=>t.surname.startsWith(e))}filterByNameNotStartingWith(e){return this.scientists.filter(t=>!t.name.startsWith(e))}findOldestAndYoungestScientists(){const e=this.scientists.reduce((s,i)=>i.dead-i.born>s.dead-s.born?i:s),t=this.scientists.reduce((s,i)=>i.dead-i.born<s.dead-s.born?i:s);return[e,t]}filterByMatchingInitials(){return this.scientists.filter(e=>e.name[0]===e.surname[0])}renderScientists(e){this.list.innerHTML="",e.forEach(t=>{const s=document.createElement("li");s.classList.add("scientists__item"),s.innerHTML=`<p>${t.name} ${t.surname} <br /> ${t.born}-${t.dead}</p>`,this.list.appendChild(s)})}}document.addEventListener("DOMContentLoaded",()=>{new p,new y(".our-team"),new S,new f,u(),g()});
//# sourceMappingURL=index-ByiC4bfJ.js.map