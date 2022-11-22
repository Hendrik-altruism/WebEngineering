var current = 0;
var Dates = [];
var int;

document.getElementById('add').addEventListener("click", function(){
    let akt = Dates.length;
    const node = document.createElement("li");
    node.appendChild(document.createTextNode(document.getElementById('name').value));
    const time = document.createElement("time")
    time.setAttribute("id", "t"+akt)
    Dates.push(new Date());
    Dates[akt].setTime(-3600000);
    time.innerHTML= " "+Dates[akt].toLocaleTimeString()+" ";
    node.appendChild(time)
    const button = document.createElement("button");
    button.setAttribute("onclick", "toggleTime("+akt+")")
    button.setAttribute("id", "b"+akt)
    button.appendChild(document.createTextNode("Start!"))
    node.appendChild(button);
    document.getElementById('talkers').appendChild(node)
    document.getElementById('name').value=""
    toggleTime(akt);
});


function myTimer(){
    let day = (Dates[current].getTime()+1000);
    Dates[current].setTime(day)
    document.getElementById("t"+current).innerHTML = " "+Dates[current].toLocaleTimeString()+" ";
}

function toggleTime(c){
    if(document.getElementById("b"+c).innerHTML=="Start!"){
        clearInterval(int)
        document.getElementById("b"+current).innerHTML = "Start!";
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


const containerSort = document.querySelector('div[id="topSort"]');
containerSort.innerHTML = ` <input id="inputArray">
                <button id="sort">Sortieren</button>`
document.getElementById('sort').addEventListener("click", function(){
    const outPut = document.createElement('text')
    outPut.innerHTML = topSort(JSON.parse(document.getElementById('inputArray').value))
    containerSort.appendChild(outPut)
})



function topSort(x){
    var relations = x
    let erg = [];
    while (typeof(x = topSortStep())!="undefined"){
        erg.push(x)
    }

    function topSortStep() {
        const Larr = []
        const Rarr = []
        relations.forEach(element => {
            Larr.push(element[0])
            Rarr.push(element[1])
        });
        const distinct = (value, index, self) => {
            return self.indexOf(value) === index;
        }
        const distinctEl = (Larr.concat(Rarr)).filter(distinct);
        let del  
        distinctEl.forEach(element => {
            if(!Rarr.includes(element)){
                del = element
            }
        })
        relations.forEach(element => {
            if(element[0]===del){
                element.shift();
            };
        })
        return del
    }

    return erg;
}