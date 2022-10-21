async function changeView(param){
    console.log(param)
}

async function showNav(){
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.navList');
    navList.classList.toggle('nav-active');
    burger.classList.toggle('trans');
}