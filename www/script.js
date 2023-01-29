import {webData} from './config.js';

renderMainNav();
renderHomeApp();
//renderModal();

//rendert das Modal-Element => Register und Login
function renderModal(){
  const body = document.querySelector('body');
  body.classList.add("modal-open");
  body.style = "overflow: hidden;"
  const myModal = document.createElement('div')
  const modal = `<div
  class="modal fade show"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-modal="true"
  style="display: block;"
  role="dialog"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <div id="login" class="nav-link active">Login</div>
          </li>
          <li class="nav-item">
            <div id="register" class="nav-link">Registrieren</div>
          </li>
        </ul>
        <div class="modalContent"></div>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>
<div class="modal-backdrop fade show"></div>`;
  myModal.innerHTML = modal;
  body.appendChild(myModal);
  buildForm();

  document.getElementById('login').addEventListener('click', ()=>{
    document.getElementById('register').classList.remove("active")
    document.getElementById('login').classList.add("active")
    buildForm()
  });

  document.getElementById('register').addEventListener('click', ()=>{
    document.getElementById('login').classList.remove("active")
    document.getElementById('register').classList.add("active")
    buildForm()
  });

  function buildForm(){
    const login = document.getElementById('login').classList.contains("active");
    const space = document.querySelector(".modalContent");
    space.firstChild.remove()
    const form = document.createElement('form');
    form.setAttribute("action", "connect.php");
    form.setAttribute("method", "POST");
    const modalForm = `
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email Addresse</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="emailAdress">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Passwort</label>
      <input type="password" class="form-control" id="exampleInputPassword1" name="password">
    </div>
    ${!login? `
    <div class="mb-3">
    <label for="exampleInputPassword2" class="form-label">Passwort Wiederholung</label>
    <input type="password" class="form-control" id="exampleInputPassword2" name="password2">
    <p style="display: none">Passwort stimmt nicht überein</p>
    </div>`: ""}
    <button type="submit" class="btn loginBtn">${login? "Login": "Registrieren"}</button>`
    form.innerHTML = modalForm;
    space.appendChild(form);
    document.querySelector('.loginBtn').addEventListener("click", ()=>{
      const body = document.querySelector('body');
      body.classList.remove("modal-open");
      body.style = "overflow: auto;"
      document.querySelector('.modal').remove();
      document.querySelector('.modal-backdrop').remove();
    });
  }
}


//Rendert die standart Navbar Struktur mit EventListenern
function renderMainNav(){
  let srcMode = "./ressources/svg/brightness-high.svg";
  let srcLog = "./ressources/svg/power-light.svg";
  if(document.body.classList.contains("light-mode")){
    srcMode = "./ressources/svg/moon.svg"
    srcLog = "./ressources/svg/power-dark.svg";
  }
  document.querySelector('body').innerHTML=''
  document.querySelector('body').innerHTML=`<div class="grid-container"> 
  <nav class="header">
      <img src="./ressources/graphics/Logo.png" alt="Home" id="homeLogo">
      <div class="heading">
          Web Engineering
      </div>
      <ul class="navList">
          <li class="navItem">1</li>
          <li class="navItem"><img id="modeSwitch" src=${srcMode}></li>
          <li class="navItem"><a href="login.php"><img id="logout" src=${srcLog}></a></li>
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
      
  </div>
  </div>`
  
  document.getElementById('homeLogo').addEventListener("click", ()=>{
    renderMainNav();
    renderHomeApp();
  })

  document.getElementById("burgerMenu").addEventListener("click", async ()=>{
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.navList');
    navList.classList.toggle('nav-active');
    burger.classList.toggle('trans'); 
  })

  document.getElementById('modeSwitch').addEventListener("click", async ()=>{
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode")){
      document.getElementById('modeSwitch').src = "./ressources/svg/moon.svg"
      document.getElementById('logout').src = "./ressources/svg/power-dark.svg"
    }else{
      document.getElementById('modeSwitch').src = "./ressources/svg/brightness-high.svg"
      document.getElementById('logout').src = "./ressources/svg/power-light.svg"
    }
  })

}

//Rendert den Haubtcontent der Main-Page

function renderHomeApp() {
      document.querySelector('.main').innerHTML=''
      document.querySelector( '.main' ).innerHTML='<div id="cards" class="row row-cols-1 row-cols-md-3 g-4"></div>';
      const $items = document.querySelector('#cards')
      webData.elemente.forEach( element => {
        const $item = document.createElement( 'div' );
        const elementSVG = element.img;
        $item.classList.add( 'col' );
        $item.innerHTML = `  
          <div class="card">
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
            await sleep(300);
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
      <img src="./ressources/graphics/Logo.png" alt="Home" id="homeLogo">
      <svg id="returnArrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-arrow-return-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/></svg>
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}