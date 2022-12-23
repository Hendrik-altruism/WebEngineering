import {webData} from './config.js';

const listeners = document.querySelectorAll('li').forEach((listener, index) =>{
    listener.addEventListener("click", ()=>{
       changeView(index+1) 
    })
})
document.getElementById('homeLogo').addEventListener("click", ()=>{
    changeView(1)
})

document.getElementById("burgerMenu").addEventListener("click", async ()=>{
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.navList');
    navList.classList.toggle('nav-active');
    burger.classList.toggle('trans'); 
})

async function changeView(value){
    console.log(value)
}


renderApp();

    function renderApp() {
      const $items = document.querySelector( '#cards' );
      $items.innerHTML = '';
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
      } );
      //Länge des letzten Kastens
      {const $item = document.createElement( 'div' );
        $item.classList.add( 'col' );
        $items.appendChild( $item );}

        {const $item = document.createElement( 'div' );
        $item.classList.add( 'col' );
        $items.appendChild( $item );}
        
        {const $item = document.createElement( 'div' );
        $item.classList.add( 'col' );
        $items.appendChild( $item );}
    }


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }