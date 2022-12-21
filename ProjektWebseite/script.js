
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
            text: "CSS-Selektoren und Farben, sowie Positionierung und eine einfache Anwendung"
        },
        {
            titel: "RWD",
            img: "./ressources/svg/phone.svg",
            text: "Responsives Web-Design mit Grid, Flexbox und Media Queries"
        },
        {
            titel: "JavaScript",
            img: "./ressources/svg/braces.svg",
            text: "Javascript Funktionen, Objekte mit den Anwendungen Fibonacci und TopSort"
        },
        {
            titel: "PHP",
            img: "./ressources/svg/router.svg",
            text: "Das erste Kapitel befasst sich mit Html "
        },
        {
            titel: "DOM",
            img: "./ressources/svg/columns-gap.svg",
            text: "Das erste Kapitel befasst sich mit Html "
        },
        {
            titel: "ECMA",
            img: "./ressources/svg/chevron-right.svg",
            text: "Das erste Kapitel befasst sich mit Html "
        },
        {
            titel: "Funktional",
            img: "./ressources/svg/speedometer2.svg",
            text: "Das erste Kapitel befasst sich mit Html "
        },
        {
            titel: "Vue",
            img: "./ressources/svg/chevron-down.svg",
            text: "Das erste Kapitel befasst sich mit Html "
        },
        {
            titel: "SVG",
            img: "./ressources/svg/filetype-svg.svg",
            text: "Das erste Kapitel befasst sich mit Html "
        },
        {
            titel: "TypeScript",
            img: "./ressources/svg/cup-hot.svg",
            text: "Das erste Kapitel befasst sich mit Html "
        },
        {
            titel: "Async",
            img: "./ressources/svg/pause-circle.svg",
            text: "Das erste Kapitel befasst sich mit Html "
        },
        {
            titel: "WA-Security",
            img: "./ressources/svg/shield-lock.svg",
            text: "Das erste Kapitel befasst sich mit Html "
        }
    ]
}

