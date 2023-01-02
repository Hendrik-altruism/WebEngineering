import {webData} from './config.js';

renderMainNav();
renderHomeApp();

//Rendert die standart Navbar Struktur mit EventListenern
function renderMainNav(){
  document.querySelector('body').innerHTML=''
  document.querySelector('body').innerHTML=`<div class="grid-container"> 
  <nav class="header">
      <img src="./ressources/graphics/Logo.png" alt="Home" id="homeLogo">
      <div class="heading">
          Web Engineering
      </div>
      <ul class="navList">
          <li class="navItem" id="first">1</li>
          <li class="navItem">2</li>
          <li class="navItem">3</li>
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
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${index}" aria-expanded="true" aria-controls="panelsStayOpen-heading${index}">
            ${key}
            <svg id="svg${index}" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>
            </button>
            </h2>
            <div id="panelsStayOpen-collapse${index}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading${index}">
            <div class="accordion-body">
            <pre class="codeField">${result}</pre>`;
          if(value[1]!=null){tasks += `<button class="showExample">Beispiel</button>`}
        //Todo kein Button
          tasks +=  `</div></div>`
          obj.innerHTML = tasks;
          $task.appendChild(obj)
          if(state[index]){
            obj.querySelector('button').classList.remove("collapsed")
            obj.querySelector('button').setAttribute("area-expanded", "true")
            obj.querySelector('.accordion-collapse').classList.add("show")
          }
          obj.querySelector('button').addEventListener('click', ()=>{
            obj.querySelector('svg').classList.toggle('rot')
          })
          if(value[1]!=null){
            obj.querySelector('.showExample').addEventListener('click', ()=>{
            calculateState()
            renderTaskNav(val, index, state)
          })}
        }))
        index++;
      } 
  }

//Rendert Main für div
function renderTaskNav(value, index, state){
  document.querySelector('body').innerHTML=''
  document.querySelector('body').innerHTML=`<div class="grid-container-task"> 
  <nav class="header">
      <img src="./ressources/graphics/Logo.png" alt="Home" id="homeLogo">
      <img id="returnArrow" src="./ressources/svg/arrow-return-left.svg">
      <div class="heading taskHeading">
          Aufgabe ${index+1}
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
  $content.innerHTML=`<iframe src="./ressources/aufgaben/1/4.html"></iframe>`;
}
