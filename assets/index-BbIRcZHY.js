var f=Object.defineProperty;var p=(n,e,t)=>e in n?f(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var l=(n,e,t)=>p(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const g=()=>{const n=document.querySelector(".modal--welcome"),e=document.querySelector(".modal--thanks"),t=document.querySelector(".header__welcome-text"),s=document.querySelector(".modal__form"),i=document.querySelector("[data-modal-overlay]"),r=document.querySelector("[data-modal-form]"),o=localStorage.getItem("userName");o?t.textContent=`Вітаємо,  ${o}!`:d(n,i),y(i),u(n,i),u(e,i),A(i,n,e),v(n,i),h(s,t,n,i),h(r,t,e,i,1)},y=n=>{document.querySelectorAll("[data-modal-close]").forEach(e=>{e.addEventListener("click",()=>{const t=e.closest(".modal");c(t,n)})})},u=(n,e)=>{document.addEventListener("keydown",t=>{t.key==="Escape"&&c(n,e)})},A=(n,e,t)=>{n.addEventListener("click",()=>{c(e,n),c(t,n)})},v=(n,e)=>{document.querySelector(".header__welcome-text").addEventListener("click",()=>{d(n,e)})},h=(n,e,t,s,i=0)=>{i===0?n.addEventListener("submit",r=>{r.preventDefault();const o=n.querySelector("[data-modal-input]").value.trim();if(!/^[a-zA-Zа-яА-ЯёЁ]{4,20}$/.test(o)){alert("Введіть нікнейм від 4 до 20 символів без викростання спеціальних символів");return}localStorage.setItem("userName",o),e.textContent=`Вітаємо, ${o}!`,c(t,s)}):n.addEventListener("submit",r=>{r.preventDefault(),d(t,s)})},d=(n,e)=>{n.classList.remove("is-hidden"),document.body.style.overflow="hidden",e.classList.remove("is-hidden")},c=(n,e)=>{n.classList.add("is-hidden"),document.body.style.overflow="",e.classList.add("is-hidden")},b=()=>{const n=document.querySelector("[data-dropdown-open]"),e=document.querySelector("[data-dropdown]"),t=n.querySelector("[data-dropdown-arrow]");n.addEventListener("click",s=>{s.preventDefault(),e.classList.toggle("active"),t.classList.toggle("rotate")})},S=()=>{const n=document.querySelectorAll("[data-sect]");document.querySelectorAll("[data-changeBtn]").forEach(t=>t.addEventListener("click",s=>{s.preventDefault();const i=t.dataset.changebtn;n.forEach(r=>{if(i==="all"){r.classList.remove("visually-hidden");return}r.classList.remove("visually-hidden"),r.dataset.sect!==i&&r.classList.add("visually-hidden")})}))};class L{constructor(){l(this,"themes",{dark:{src:new URL("data:image/png;base64,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",import.meta.url).href,alt:"dark theme image",storageValue:"dark"},light:{src:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAoCAYAAABpYH0BAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAf+SURBVHgB1VtpaBNbFD6tzwXXcVfcUnDFpSmoIFZNRP+IglXccGtFBXFpKkj1h6ZF3HBpFEX/aPsUURGpgogg2FT94d5WQUUFo7hvL7iLWN/5zusN6XQ6mUnlcf1gSGYyd+7MN2c/NymUJDIzM32XLl1Kb968ue/Xr1/e6upq4/v374b6vU2bNrGtV69e1LNnTzIMg3RASkpKlO85wl+xVfJ++YYNG8KUBFLIHYzWrVsHWrRokfv161dj8uTJlJ6eTj6fT8jxeDyxEyORiGyVlZWylZeXE4+hYcOGUd++falZs2akGSK8hX/+/Fm4ZcuWiNNBTgkEcQUsYbkjRoygYDAopLlFOBymkpISOnnyJA0ePJhGjx5NmqLEKZEJCRw6dGjg9u3bQSbOKC4uriVlyQKSWVBQIETOnj1bG9U2IcKqXcCq/bfdSbYEduvWLfT58+fc0tLSpCQuESCNhYWF1L17d22lkW1laNOmTXn1/W5JYCAQME6cOFHavn17H8hzKnWQKGyLFi2ikSNHOhoDafT7/bqTWMn22x8KhaLm3ywJ7NOnTwU7Cm9ZWZkr9QIBFy9eFGnFWKeIRqNCYuPGjWn8+PGkI5jEMEui33w81XygZcuWoWTIA3HYADgLbE6BeTDfjx8/6MKFC6Qj2B761qxZU2Q+XovAjh07Znfo0EFsnlvDvn///lr727ZtIzfAfJj36dOn9PjxY9IRTGKASQzEH4sn0PPmzZuglaeFnYJaLl68mG7dulXnwlDBjx8/0qpVqyTEWb16NSajV69e1TkXkrly5UrKyMiQ68YD82L+06dPE4dMpCP4uYLwEbF99YXVtnjatGnZeAAz8NCwUQpDhgyhJUuW0MyZMx1J6ocPH6ioqIjOnDlDV69ejR2H2lp597y8PLpx4waNGjWKdES8Z1YEenh7xLD0uDwA6k3v3r2TfQ6qaf369bRixQrZB8Eg5/79+yKNjRo1Iq/XS7NmzUIcKefs3r2b8vPz6cuXL/9NyPNgPivgGv3796c5c+ZQ06ZNSUfwc7SFVxYV7tKlSzA7O7vecAXquGzZMvnOoQ2dPXtWyLt7965IEKRz69atdOrUKUnZzp8/Tzt27JC0DVIEojCec+eYxM6bN6/em8M5kO54adUNXAPIxacQ+PLlSx9slx1mzJghn4cPHyakcwcOHKDhw4cLYXYAaZAmSCDsHsYDc+fOtR2HPPvatWukMcSZQIV9rG5lFRUVCUccPHhQJOf48eM0ffp0cotz587RuHHjxNtmZWUlPB+EDxw4UKo5OoLzZX8q27MxDEcDQB48J7xtMoBNg31zQh6A+3r9+jXpCrb16ansIb1u8txjx44lHachrGHD6/h8OKInT56QrmDn6oMN9NjluojHuKxDN2/elP19+/ZRQ7B37175rKqqkmKCHfBi2T6TrmDn6q2XQKgaSk7soSUw7tq1K925c6dO8OsWUElcgzMeysnJEc+PeaykGt5Y14C6BgYINMzBMNS0R48eUmoCkQAI/F32CARyqUy+gzjMAyIxb6274/v69u0baQwjtb5fPn36RP8nOBOiPxEgMKqkTAExn5IMFUI8f/78t1Sjgc6dO9OzZ8/kO6QMKowigoo1FXBfGvZO4hG1JBBAF23dunWibsiP3759KwR26tSJGgJcY8CAAfTixQvauHGjfCKIt8qpMTe6eroCnT0QWJmodoc0DwUEAEWEhkCNR47MpSFbCQOBmvZLFITAMNqOTsGlnKSlEObATQaDFwtN0BUcxlSCwKpE+ayCKrSqfNYttm/fLiqMlNAJcF+wl7oCZX4lgdFEavzw4UOaMmWKlK2Qz6I40KRJE3ICbhNIxXrq1KlSyZk/fz7du3fPdgzUF1UcXSUQ9o9rguUqjAmhm2aHQ4cOySf6uMhKli5dKiQkKnoim7hy5QotWLCALl++LPkwcPToUdtx8MzK7uoIVt+wfNbsG5xx/IP6Xn1GOy0tLZaFcC2MNm/eTMuXL5f969ev05EjRyQ94wqFXIM7ezRhwoRYxXnXrl20du1aqU4D7dq1E8+OWqMZmAfz4SXp6oX5OdOwcuGvmv0oB84hjvsCKL2bAfWOT+EGDRpE79+/FzJQnYZHVZVnK6h4DvZP9VQwHjbOqpAB6UOtUeMQpkQt+4h//QaXzx+xjTLMDwXyUIIaO3YsTZo0qc5Do8qycOFCIRYleJTtYTNRdDVLNKR0z5499ODBA7JqYOFloZgKVdeRQNi+6upqvxWBsg6G1aoIzR63WQeIRTdNAbGjVYPKDmqVAqQZK7h0BBOYzc4jtl6mjgFij1nUu3fvgNvGurlzhyZ7Zmam4/FqdUKrVq3+iG6cguXSDg54y9q2betzSyIIAJEgwM0KA0UewiKESDoC62OYvAzzcctqDKtfFgZYNb/tgFYnVBeNc6dQaqs5eWEsLrL6zXZ5G9SZC58BJPsg5ncD0grnhPYnNh2RaHlbqt1gDm3yuC/BheOcCKrHDa1GK6ilIvC2EydO1JW8KMd6ATvyAFsCAc5QSvLz8/0c3pSgyQMi3ay8igfGgTj0iTkUkNBHx1QNUsehGALlnYnOdbXInB/ewwY/yCmcjzMXD8jAInMQi7DHvMgczgGkodqDVQuI65ChYIyGSzai/FJD3ELYabWQsj64XaUfA3vaMVy19nHc6OU35uHJPfF/c4D3BkmopqD81a9fP50CY/zNIYpyFH8P13hYZyUpE/4FRcjfZUL50D4AAAAASUVORK5CYII=",import.meta.url).href,alt:"light theme image",storageValue:"light"}});l(this,"storageKey","theme");this.switchThemeBtn=document.querySelector("[data-theme-switcher]"),this.themeImg=this.switchThemeBtn.querySelector(".header__theme-img"),this.setInitialTheme(),this.bindEvents()}getCachedTheme(){return localStorage.getItem(this.storageKey)}setThemeToCache(e){localStorage.setItem(this.storageKey,e)}setInitialTheme(){const t=this.getCachedTheme()===this.themes.dark.storageValue;document.documentElement.classList.toggle("is-dark-theme",t),this.updateButtonImage(t?this.themes.dark:this.themes.light)}updateButtonImage(e){this.themeImg.src=e.src,this.themeImg.alt=e.alt}onClick(){const t=this.getCachedTheme()===this.themes.dark.storageValue,s=t?this.themes.light:this.themes.dark;this.setThemeToCache(s.storageValue),document.documentElement.classList.toggle("is-dark-theme",!t),this.updateButtonImage(s)}bindEvents(){this.switchThemeBtn.addEventListener("click",()=>this.onClick())}}class C{constructor(){this.activateButton=document.querySelector("[data-leap-year-btn]"),this.init()}init(){this.activateButton.addEventListener("click",this.leapYear.bind(this))}leapYear(){const e=document.querySelector("[data-leap-year-input]"),t=document.querySelector("[data-leap-year-result]");e.value%4==0&&e.value%100!==0?(t.style.color="green",t.textContent="Ви народилися у високосний рік!"):(t.style.color="red",t.textContent="Ви народилися не у високосний рік!")}}class I{constructor(){this.activateButton=document.querySelector("[data-guess-btn]"),this.init()}init(){this.activateButton.addEventListener("click",this.guessNumber.bind(this))}guessNumber(){const e=Math.floor(Math.random()*10)+1,t=document.querySelector("[data-guess-result]");document.querySelector("[data-guess-input]").value==e?(t.style.color="green",t.textContent=`Ви вгадали число! (${e})`,console.log("right")):(t.style.color="red",t.textContent=`Ви не вгадали число! (${e})`,console.log("wrong")),console.log(e)}}class B{constructor(){this.refs={rockBtn:document.getElementById("rock-btn"),scissorsBtn:document.getElementById("scissors-btn"),paperBtn:document.getElementById("paper-btn"),resultText:document.querySelector(".rock-paper-scissors_result-text"),compChoice:document.querySelector(".rock-paper-scissors_computer-version"),compScore:document.getElementById("pc-score"),userScore:document.getElementById("user-score")},this.userScore=0,this.compScore=0,this.compChoice=null,this.userChoice=null,this.eventListeners()}eventListeners(){this.refs.rockBtn.addEventListener("click",()=>{this.userChoice="Rock",this.computerVer(),this.rules()}),this.refs.scissorsBtn.addEventListener("click",()=>{this.userChoice="Scissors",this.computerVer(),this.rules()}),this.refs.paperBtn.addEventListener("click",()=>{this.userChoice="Paper",this.computerVer(),this.rules()})}computerVer(){let e=Math.random();e<=.3?(this.compChoice="Rock",this.refs.compChoice.innerHTML="Комп'ютер обрав камінь"):e<=.6?(this.compChoice="Scissors",this.refs.compChoice.innerHTML="Комп'ютер обрав ножиці"):(this.compChoice="Paper",this.refs.compChoice.innerHTML="Комп'ютер обрав папір")}rules(){this.userChoice=="Paper"&&this.compChoice=="Rock"||this.userChoice=="Scissors"&&this.compChoice=="Paper"||this.userChoice=="Rock"&&this.compChoice=="Scissors"?(this.refs.resultText.innerHTML="Ви виграли!",this.userScore+=1,this.refs.userScore.innerHTML="Ви - "+this.userScore):this.userChoice==this.compChoice?this.refs.resultText.innerHTML="Нічия!":(this.refs.resultText.innerHTML="Ви програли!",this.compScore+=1,this.refs.compScore.innerHTML="Комп'ютер - "+this.compScore)}}class E{constructor(){this.refs={firstInput:document.getElementById("first-num"),secondInput:document.getElementById("second-num"),sumButton:document.getElementById("+"),minButton:document.getElementById("-"),multButton:document.getElementById("*"),divisButton:document.getElementById("/"),resultButton:document.querySelector(".calculator_btn"),valueText:document.querySelector(".calculator_value-text")},this.operation=null,this.eventListeners()}eventListeners(){this.refs.sumButton.addEventListener("click",()=>{this.operation="+"}),this.refs.minButton.addEventListener("click",()=>{this.operation="-"}),this.refs.multButton.addEventListener("click",()=>{this.operation="*"}),this.refs.divisButton.addEventListener("click",()=>{this.operation="/"}),this.refs.resultButton.addEventListener("click",()=>{const e=parseFloat(this.refs.firstInput.value),t=parseFloat(this.refs.secondInput.value);if(isNaN(e)||isNaN(t)){this.refs.valueText.innerHTML="Помилка! Введіть числа!";return}const s=this.calculator(e,t,this.operation);s!==null&&(this.refs.valueText.innerHTML=s)})}calculator(e,t,s){let i=null;switch(s){case"+":i=e+t;break;case"-":i=e-t;break;case"*":i=e*t;break;case"/":if(t==0)return this.refs.valueText.innerHTML="На нуль не ділиться!",null;i=e/t;break;default:return this.refs.valueText.innerHTML="Помилка! Оберіть операцію!",null}return i}}class x{constructor(){this.input=document.querySelector("[data-time-input]"),this.btn=document.querySelector("[data-time-btn]"),this.result=document.querySelector("[data-time-result]"),this.init()}init(){this.btn.addEventListener("click",this.calcTime.bind(this))}calcTime(e){e.preventDefault();const t=parseFloat(this.input.value);if(isNaN(t)||t<0)return console.error("Invalid input: time must be a non-negative number.");let s=Math.floor(t/1440),i=Math.floor(t%1440/60),r=Math.floor(t%60),o=Math.floor(t*60%60);this.result.textContent=`${s}дн. ${i}:${r}:${o}`}}class T{constructor(){this.score=0,this.scoreElement=document.getElementById("scoreElementId"),setInterval(()=>this.updateScore(),100),this.object=document.getElementById("dino"),this.section=document.querySelector(".dino-game"),this.isJumping=!1,this.jumpHeight=100,this.gravity=10,document.addEventListener("keydown",e=>{e.code==="KeyW"&&this.jump()})}updateScore(){this.score+=1,this.scoreElement.textContent=this.score}jump(){if(!this.object){console.error("this.object is not defined or is null");return}if(this.isJumping)return;this.isJumping=!0;let e=parseInt(getComputedStyle(this.object).bottom),t=this.section.offsetHeight,s=Math.min(e+this.jumpHeight,t-this.object.offsetHeight),i=e,r=setInterval(()=>{if(i>=s){clearInterval(r);let o=setInterval(()=>{i<=e?(clearInterval(o),this.isJumping=!1):(i-=this.gravity,this.object.style.bottom=i+"px")},20)}else i+=this.gravity,this.object.style.bottom=i+"px"},20)}}class m{constructor(){if(this.container=document.querySelector(".football-field"),this.football=document.querySelector(".football-img"),!this.container||!this.football){console.error("Елементи .football-field або .football-img не знайдено");return}this.football.style.position="absolute",this.football.style.top="0px",this.football.style.left="0px"}click(){!this.container||!this.football||this.container.addEventListener("click",e=>{const t=this.container.getBoundingClientRect(),s=getComputedStyle(this.container),i=parseInt(s.borderLeftWidth,10)||0,r=parseInt(s.borderTopWidth,10)||0;let o=e.clientX-t.left-this.football.offsetWidth/2,a=e.clientY-t.top-this.football.offsetHeight/2;o=Math.max(i,Math.min(o,t.width-this.football.offsetWidth-i)),a=Math.max(r,Math.min(a,t.height-this.football.offsetHeight-r)),console.log(`Обмежені координати м'яча: x: ${o}, y: ${a}`),this.football.style.left=`${o}px`,this.football.style.top=`${a}px`})}}const k=new m;k.click();class M{constructor(){this.form=document.querySelector("[data-biggNum-form]"),this.result=document.querySelector("[data-biggNum-result]"),this.inputs=document.querySelectorAll("[data-biggNum-input]"),this.init()}init(){if(!this.form||!this.result||this.inputs.length===0){console.error("Form, result element, or input not found.");return}this.form.addEventListener("submit",e=>{e.preventDefault();const t=Array.from(this.inputs).map(i=>parseFloat(i.value));if(t.some(isNaN)){this.result.textContent="Будь ласка, введіть коректні числа у всі поля";return}const s=Math.max(...t);this.result.textContent=`Найбільше число, яке ви ввели - ${s}`})}}class N{constructor(e){this.container=document.querySelector(e),this.slider=this.container.querySelector("[data-slider]"),this.cards=this.container.querySelectorAll("[data-slider-card]"),this.dotsContainer=this.container.querySelector("[data-slider-dots]"),this.prevBtn=this.container.querySelector("[data-slider-prev]"),this.nextBtn=this.container.querySelector("[data-slider-next]"),this.cardCount=6,this.activeIndex=0,this.init()}init(){this.createDots(),this.updateSlider(),this.bindEvents()}createDots(){if(!(this.dotsContainer.children.length>0))for(let e=0;e<this.cardCount;e++){const t=document.createElement("li");t.classList.add("our-team__dots-item");const s=document.createElement("button");s.classList.add("our-team__dot"),s.dataset.sliderDot=e,e===this.activeIndex&&s.classList.add("our-team__dot--active"),t.appendChild(s),this.dotsContainer.appendChild(t)}}updateSlider(){console.log(this.cards[0].offsetWidth);const e=-this.activeIndex*this.cards[0].offsetWidth;this.slider.style.transform=`translateX(${e}px)`,this.updateDots()}updateDots(){this.dotsContainer.querySelectorAll("[data-slider-dot]").forEach((e,t)=>{e.classList.toggle("our-team__dot--active",t===this.activeIndex)})}nextSlide(){this.activeIndex<this.cards.length-1&&(this.activeIndex++,this.updateSlider())}prevSlide(){this.activeIndex>0&&(this.activeIndex--,this.updateSlider())}goToSlide(e){this.activeIndex=e,this.updateSlider()}bindEvents(){this.prevBtn.addEventListener("click",()=>this.prevSlide()),this.nextBtn.addEventListener("click",()=>this.nextSlide()),this.dotsContainer.addEventListener("click",e=>{const t=e.target.closest("[data-slider-dot]");if(t){const s=parseInt(t.dataset.sliderDot,10);this.goToSlide(s)}})}}class F{constructor(){this.scientists=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}],this.btns=document.querySelectorAll("[data-scientists-btn]"),this.list=document.querySelector("[data-scientist-list]"),this.init()}init(){this.renderScientists(this.scientists),this.btns.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.scientistsBtn;let s=[];switch(t){case"1":s=this.filterByBornIn19thCentury();break;case"2":s=this.sortByName();break;case"3":s=this.sortByAge();break;case"4":s=[this.findYoungestScientist()];break;case"5":s=[this.scientists[0]];break;case"6":s=this.filterBySurnameStartingWith("C");break;case"7":s=this.filterByNameNotStartingWith("A");break;case"8":s=this.findOldestAndYoungestScientists();break;case"9":s=this.filterByMatchingInitials();break;default:console.log("Please choose a valid button.");return}this.renderScientists(s)})})}filterByBornIn19thCentury(){return this.scientists.filter(e=>e.born>1801&&e.born<1900)}sortByName(){return[...this.scientists].sort((e,t)=>e.name.localeCompare(t.name))}sortByAge(){return[...this.scientists].sort((e,t)=>e.dead-e.born-(t.dead-t.born))}findYoungestScientist(){return this.scientists.reduce((e,t)=>t.born>e.born?t:e)}filterBySurnameStartingWith(e){return this.scientists.filter(t=>t.surname.startsWith(e))}filterByNameNotStartingWith(e){return this.scientists.filter(t=>!t.name.startsWith(e))}findOldestAndYoungestScientists(){const e=this.scientists.reduce((s,i)=>i.dead-i.born>s.dead-s.born?i:s),t=this.scientists.reduce((s,i)=>i.dead-i.born<s.dead-s.born?i:s);return[e,t]}filterByMatchingInitials(){return this.scientists.filter(e=>e.name[0]===e.surname[0])}renderScientists(e){this.list.innerHTML="",e.forEach(t=>{const s=document.createElement("li");s.classList.add("scientists__item"),s.innerHTML=`<p>${t.name} ${t.surname} <br /> ${t.born}-${t.dead}</p>`,this.list.appendChild(s)})}}document.addEventListener("DOMContentLoaded",()=>{new C,new I,new B,new E,new x,new T,new m,new M,new N(".our-team"),new F,new L,g(),b(),S()});
//# sourceMappingURL=index-BbIRcZHY.js.map
