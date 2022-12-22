
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





const topicsData = {
    elemente: [
        {
            titel: "HTML",
            img: "./ressources/svg/code-slash.svg",
            text: "Geschichte des WWW, Einführung in HTTP und HTML mit einer Anwendung"
        },
        {
            titel: "CSS",
            img: "./ressources/svg/eyedropper.svg",
            text: "Selektoren und Farben, sowie Positionierung und eine einfache Anwendung"
        },
        {
            titel: "Responsive Web Design",
            img: "./ressources/svg/phone.svg",
            text: "Grid, Flexbox und Media Queries"
        },
        {
            titel: "JavaScript",
            img: "./ressources/svg/braces.svg",
            text: "Funktionen, Objekte mit den Anwendungen Fibonacci und TopSort"
        },
        {
            titel: "Document Object Model",
            img: "./ressources/svg/columns-gap.svg",
            text: "Das erste Kapitel befasst sich mit Html "
        },
        {
            titel: "ECMAScript",
            img: "./ressources/svg/chevron-right.svg",
            text: "Das erste Kapitel befasst sich mit Html "
        },
        {
            titel: "Funktionale Programmierung",
            img: "./ressources/svg/speedometer2.svg",
            text: "Das erste Kapitel befasst sich mit Html "
        },
        {
            titel: "Asynchrones JavaScript",
            img: "./ressources/svg/pause-circle.svg",
            text: "Das erste Kapitel befasst sich mit Html "
        },
        {
            titel: "Scalable Vector Graphics",
            img: "./ressources/svg/filetype-svg.svg",
            text: "Das erste Kapitel befasst sich mit Html "
        },
        {
            titel: "TypeScript",
            img: "./ressources/svg/cup-hot.svg",
            text: "Das erste Kapitel befasst sich mit Html "
        },
        {
            titel: "Vue 2",
            img: "./ressources/svg/chevron-down.svg",
            text: "Das erste Kapitel befasst sich mit Html "
        },
        {
            titel: "Server-side Scripting",
            img: "./ressources/svg/router.svg",
            text: "Das erste Kapitel befasst sich mit Html "
        },
        {
            titel: "Web App Security",
            img: "./ressources/svg/shield-lock.svg",
            text: "Das erste Kapitel befasst sich mit Html "
        }
    ]
}

renderApp();

    function renderApp() {
      const $items = document.querySelector( '#cards' );
      $items.innerHTML = '';
      topicsData.elemente.forEach( element => {
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