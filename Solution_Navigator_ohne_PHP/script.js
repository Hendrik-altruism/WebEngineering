import {webData} from './config.js';
import * as helper from './ressources/js/helper.js';

let animation = true;
renderMainNav();
renderHomeApp();


//Rendert die standart Navbar Struktur mit EventListenern
function renderMainNav(){
  let srcPerson = "./ressources/svg/magic-light.svg";
  let srcMode = "./ressources/svg/brightness-high.svg";
  let srcLog = "./ressources/svg/power-light.svg";
  if(document.body.classList.contains("light-mode")){
    srcPerson = "./ressources/svg/magic-dark.svg";
    srcMode = "./ressources/svg/moon.svg"
    srcLog = "./ressources/svg/power-dark.svg";
  }
  document.querySelector('body').innerHTML=''
  document.querySelector('body').innerHTML=`<div class="grid-container"> 
  <nav class="header">
      <img class="clickable" src="./ressources/graphics/Logo.png" alt="Home" id="homeLogo">
      <div class="heading">
          Solution Navigator
      </div>
      <ul class="navList">
          <li class="navItem">
            <img class="animation-style clickable icons" src=${srcPerson}>
            <div class="animation-style hoverable word">animation</div>
          </li>
          <li class="navItem">
            <img class="modeSwitch clickable icons" src=${srcMode}>
            <div class="modeSwitch hoverable word">farbmodus</div>
          </li>
          <li class="navItem">
            <img class="logout clickable icons" src=${srcLog}>
            <div class="logout hoverable word">logout</div>
          </li>
      </ul>
      <div class="burger" id="burgerMenu">
          <div class="l1"></div>
          <div class="l2"></div>
          <div class="l3"></div>
      </div>
  </nav>
  <div class="main">
      <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
  </div>
  <div class="footer">
      <div class="footer-box">
        <div class="footer-header"><h5>Kontakt</h5></div>
        <div class="footer-text">
          <b>email:</b> hendrik.oh@t-online.de
          <br>
          <b>mobil:</b> +49 175 5333890
          <br>
          <a href="https://www.instagram.com/hendrik.oh/" target=_"blank"><img src="./ressources/svg/instagram.svg"></a>
          <a href="https://www.snapchat.com/add/hendrik_0605?share_id=fffdcaKES824ysRlQ58Ukg&locale=de_DE" target=_"blank"><img src="./ressources/svg/snapchat.svg"></a>
          <a href="https://www.youtube.com/@lothohornblaeser5879" target=_"blank"><img src="./ressources/svg/youtube.svg"></a>
          <a href="hhttps://www.facebook.com/fredegar.maggot.5" target=_"blank"><img src="./ressources/svg/facebook.svg"></a>
          <a href="https://github.com/Hendrik-altruism" target=_"blank"><img src="./ressources/svg/github.svg"></a>
        </div>
      </div>
      <div class="footer-box">
        <div class="footer-header"><h5>Ressourcen</h5></div>
        <div class="footer-text">
          <a href="https://code.visualstudio.com/" target=_"blank">Visual Studio Code</a><br>
          <a href="https://github.com/" target=_"blank">GitHub</a><br>
          <a href="https://getbootstrap.com/" target=_"blank">Bootstrap</a>
        </div>
      </div>
  </div>
  </div>`
  
  document.getElementById('homeLogo').addEventListener("click", ()=>{
    renderMainNav();
    renderHomeApp();
  })

  document.querySelectorAll('.animation-style').forEach(element => element.addEventListener("click", ()=>{
    animation = !animation;
    renderHomeApp();
  }))

  document.getElementById("burgerMenu").addEventListener("click", async ()=>{
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.navList');
    navList.classList.toggle('nav-active');
    burger.classList.toggle('trans'); 
  })
  document.querySelectorAll('.modeSwitch').forEach(element => element.addEventListener("click", async ()=>{
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode")){
      document.querySelector('.animation-style').src = "./ressources/svg/magic-dark.svg"
      document.querySelector('.modeSwitch').src = "./ressources/svg/moon.svg"
      document.querySelector('.logout').src = "./ressources/svg/power-dark.svg"
    }else{
      document.querySelector('.animation-style').src = "./ressources/svg/magic-light.svg"
      document.querySelector('.modeSwitch').src = "./ressources/svg/brightness-high.svg"
      document.querySelector('.logout').src = "./ressources/svg/power-light.svg"
    }
  }))
}

//Rendert den Haubtcontent der Main-Page

function renderHomeApp() {
      document.querySelector('.main').innerHTML=''
      document.querySelector( '.main' ).innerHTML='<div id="cards" class="row row-cols-1 row-cols-md-3 g-4"></div>';
      const $items = document.querySelector('#cards')
      webData.elemente.forEach( element => {
        const animate = helper.generateAnimation(animation);
        const $item = document.createElement( 'div' );
        const elementSVG = element.img;
        $item.classList.add( 'col' );
        $item.innerHTML = `  
          <div class="card ${animate}">
            <div class="row">
             <div class="col-md-4">
              <img src=${elementSVG}>
             </div>
             <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title mb-0">${ element.titel }</h5>
                <p class="card-text">${element.text}</p>
              </div>
             </div>
            </div>
          </div>
        `;
        $items.appendChild( $item );
      });
      //Länge des letzten Kastens anpassen
      {const $item = document.createElement( 'div' );
        $item.classList.add( 'col' );
        $items.appendChild( $item );}

        {const $item = document.createElement( 'div' );
        $item.classList.add( 'col' );
        $items.appendChild( $item );}
        
        {const $item = document.createElement( 'div' );
        $item.classList.add( 'col' );
        $items.appendChild( $item );}

        //Return eventlistener
        document.querySelectorAll('.card').forEach((listener, index) =>{
          listener.addEventListener("click", ()=>{
             renderTaskApp(index) 
          })
        })
    }
    


//Rendert das Layout für die Lösungen einer Augabe 

async function renderTaskApp(val, state = []){
      //Funktion um Status der Felder zu berechnen
      function calculateState(){
        const panels = document.querySelectorAll('.accordion-collapse');
        panels.forEach((element, index)=>{
           if(element.classList.contains("show")){
             state[index] = true;
           }else{state[index]= false}
        })
      }
      document.querySelector(".navItem").style="display: none;"
      const assignment = webData.elemente[val]
      const $item = document.querySelector( '.main' );
      $item.innerHTML='';
      $item.innerHTML = `<div class="accordionTask" id="accordionPanelsStayOpenExample"></div>`;
      const $task = document.querySelector('.accordionTask')
      let index = 0;
      for (const [key, value] of Object.entries(assignment.task)){
        const solution = await fetch(value[0]).then(response=>response.text().then(result=>{
          const obj = document.createElement('div')
          obj.classList.add('accordion-item')
          let tasks = `
            <h2 class="accordion-header" id="panelsStayOpen-heading${index}">
            <div class="accordion-button" style="pointer-events: auto" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${index}" aria-expanded="true" aria-controls="panelsStayOpen-heading${index}">
            ${key}
            <svg id="svg${index}" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='black'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>
            </div>
            </h2>
            <div id="panelsStayOpen-collapse${index}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading${index}">
            <div class="accordion-body">
            ${result}`;
          if(value[1]!=null){tasks += `<button class="showExample">Zeige Beispiel</button>`}
          tasks +=  `</div></div>`
          obj.innerHTML = tasks;
          $task.appendChild(obj)
          if(state[index]){
            obj.querySelector('.accordion-button').classList.remove("collapsed")
            obj.querySelector('.accordion-button').setAttribute("area-expanded", "true")
            obj.querySelector('.accordion-collapse').classList.add("show")
            obj.querySelector('svg').classList.toggle('rot')
          }
          obj.querySelector('.accordion-button').addEventListener('click', async ()=>{
            obj.querySelector('svg').classList.toggle('rot')
            obj.querySelector('.accordion-button').style="pointer-events: none";
            await helper.sleep(300);
            obj.querySelector('.accordion-button').style="pointer-events: auto";
          })
          if(value[1]!=null){
            obj.querySelector('.showExample').addEventListener('click', ()=>{
            calculateState()
            renderTaskNav(val, key, state)
          })}
        }))
        index++;
      } 
}

//Rendert Main für div
function renderTaskNav(value, key, state){
  document.querySelector('body').innerHTML=''
  document.querySelector('body').innerHTML=`<div class="grid-container-task"> 
  <nav class="header">
      <img src="./ressources/graphics/Logo.png" alt="Home" class="clickable" id="homeLogo">
      <svg class="clickable" id="returnArrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-arrow-return-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/></svg>
      <div class="heading taskHeading">
          ${key}
      </div>
  </nav>
  <div class="main-task">
      <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
  </div>
  </div>`
  
  document.getElementById('homeLogo').addEventListener("click", ()=>{
    renderMainNav();
    renderHomeApp();
  }) 

  document.getElementById('returnArrow').addEventListener("click", ()=>{
    renderMainNav();
    renderTaskApp(value, state);
  })

  const $content = document.querySelector('.main-task');
  $content.innerHTML=`<iframe src=${webData.elemente[value].task[key][1]}></iframe>`;
}

