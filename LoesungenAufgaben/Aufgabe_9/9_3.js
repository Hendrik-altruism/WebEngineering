let obj = []
let count = 0;
let turn = true;

function testWin(){
    let circlewin = ((obj[0]===1&&obj[1]===1&&obj[2]===1)||(obj[3]===1&&obj[4]===1&&obj[5]===1)||(obj[6]===1&&obj[7]===1&&obj[8]===1)||(obj[0]===1&&obj[3]===1&&obj[6]===1)||(obj[1]===1&&obj[4]===1&&obj[7]===1)||(obj[2]===1&&obj[5]===1&&obj[8]===1)||(obj[0]===1&&obj[4]===1&&obj[8]===1))
    let crosswin = ((obj[0]===0&&obj[1]===0&&obj[2]===0)||(obj[3]===0&&obj[4]===0&&obj[5]===0)||(obj[6]===0&&obj[7]===0&&obj[8]===0)||(obj[0]===0&&obj[3]===0&&obj[6]===0)||(obj[1]===0&&obj[4]===0&&obj[7]===0)||(obj[2]===0&&obj[5]===0&&obj[8]===0)||(obj[0]===0&&obj[4]===0&&obj[8]===0))
    if(crosswin){
        alert("Cross Wins!!")
    }else if(circlewin){
        alert("Circle Wins!!")
    }else if(count === 9){
        alert("Draw!!")
    }
}

let listener = document.querySelectorAll('g.fields')
for(let i = 0; i<listener.length; i++){
    listener[i].addEventListener('click', ()=>{
        if(listener[i].querySelector('g').getAttribute("visibility")==="visible"||listener[i].querySelector('circle').getAttribute("visibility")==="visible"){
            return
        }
        turn ? listener[i].querySelector('g').setAttribute("visibility", "visible") : listener[i].querySelector('circle').setAttribute("visibility", "visible")
        turn ? obj[i] = 0 : obj[i] = 1;
        count++;
        testWin(turn);
        turn = !turn;
    })
}