
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

