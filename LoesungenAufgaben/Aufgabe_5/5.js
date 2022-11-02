var current = 0;
var Dates = [new Date()];
var int;

document.getElementById('add').addEventListener("click", async function(){
    current++;
    const node = document.createElement("li");
    node.appendChild(document.createTextNode(document.getElementById('name').value));
    const time = document.createElement("time")
    time.setAttribute("id", "t"+current)
    Dates.push(new Date());
    Dates[current].setTime(-3600000);
    time.innerHTML= Dates[current].toLocaleTimeString();
    node.appendChild(time)
    const button = document.createElement("button");
    button.setAttribute("onclick", "toggleTime("+current+")")
    button.setAttribute("id", "b"+current)
    button.appendChild(document.createTextNode("Start!"))
    node.appendChild(button);
    document.getElementById('talkers').appendChild(node)
    document.getElementById('name').value=""
    toggleTime(current);
});


function myTimer(){
    let day = (Dates[current].getTime()+1000);
    Dates[current].setTime(day)
    document.getElementById("t"+current).innerHTML = Dates[current].toLocaleTimeString()
}

async function toggleTime(c){
    if(document.getElementById("b"+c).innerHTML=="Start!"){
        current = c;
        int = setInterval(myTimer, 1000)
        document.getElementById("b"+c).innerHTML="Stopp!"
    }else if(document.getElementById("b"+c).innerHTML=="Stopp!"){
        clearInterval(int)
        document.getElementById("b"+c).innerHTML="Start!"
    }
}


const a = document.createElement('a');
a.appendChild(document.createTextNode('text'));
let start = performance.now();
a.textContent = 'text';
let erg = [performance.now()-start];
start = performance.now();
a.innerText = 'text';
erg.push(performance.now()-start);
start = performance.now();
a.innerHTML = 'text';
erg.push(performance.now()-start);
start = performance.now();
a.nodeValue = 'text';
erg.push(performance.now()-start);
var s = '<tr><th>Operation</th><th>Dauer</th></tr>';
s += '<tr><td>TextContent</td><td>'+erg[0]+'</td></tr>';
s += '<tr><td>InnerText</td><td>'+erg[1]+'</td></tr>';
s += '<tr><td>InnerHTML</td><td>'+erg[2]+'</td></tr>';
s += '<tr><td>NodeValue</td><td>'+erg[3]+'</td></tr>';
document.getElementById('table').innerHTML=s;