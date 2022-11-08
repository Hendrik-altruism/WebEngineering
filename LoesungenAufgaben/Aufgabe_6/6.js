document.getElementById('btn').addEventListener("click", () => {
    let el = document.getElementById('field');
    let s = el.value
    if(control(s, '(', ')')&&control(s, '{', '}')&&control(s, '[', ']')){
        el.style="background-color:";
    }else{
        el.style="background-color:red";
    }
})

document.getElementById('secbtn').addEventListener("click", () => {
    let el = document.getElementById('secfield'); 
    let first, last
    try{
    first = document.getElementById('klammer').value.substring(0, 1);
    last = document.getElementById('klammer').value.substring(1);
    }catch(error){
        alert("Zeichen fehlt")
        return;
    }
    let s = el.value
    if(control(s, first, last)){
        el.style="background-color:";
    }else{
        el.style="background-color:red";
    }
})


function control(sentance, first, last){
    let cfirst = 0;
    let erg = true;
    let s = sentance.split("")
    s.forEach(element => {
        if(element===first){
            cfirst+=1;
        }else if(element===last){
            cfirst-=1;
        }
        if(cfirst<0){
            erg=false;
        }
    })
    if(cfirst!=0){
        erg=false;
    }
    return erg;
}