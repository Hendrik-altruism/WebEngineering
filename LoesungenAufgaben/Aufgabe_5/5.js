var current = null;

document.getElementById('add').addEventListener("click", async function(){
    const node = document.createElement("li");
    node.appendChild(document.createTextNode(document.getElementById('name').value));
    const time = document.createElement("time")
    time.setAttribute("id", "t1")
    const d = new Date()
    time.innerHTML=(d-d).toLocaleString()
    node.appendChild(time)
    const button = document.createElement("button");
    button.appendChild(document.createTextNode("Stopp!"))
    node.appendChild(button);
    document.getElementById('talkers').appendChild(node)
    document.getElementById('name').value=""
    updateTime(time, button)
});


async function updateTime(t, b){
   
    b.addEventListener("click", function(){
        b.innerHTML="Start!"
        return null;
    })
    setInterval(1000, async function(){

    })
};


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