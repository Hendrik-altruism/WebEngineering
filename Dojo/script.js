function game(){
var counter = 1;
var val = 0;
function reset(){
    alert("Neues Spiel beginnt. Score: "+(11-counter));
    val =  Math.floor(Math.random()*101);
    counter = 1;
}
reset();
versuch();
function versuch(){
    let x = prompt("Versuch: "+counter);
    if(counter === 10){
        alert("Maximale anzahl erreicht. Wert: "+val);
        reset();
    }
    if(x == val){
        alert("Richtig!");
        reset();
    }else if(x < val){
        alert("Falsch, Wert zu klein");
        counter++;
        versuch();

    }else if(x > val){
        alert("Wert zu groß");
        counter++;
        versuch();
    }
}
}
function joinTest(){
    const matrix = [["X", "O", "X"],
                    ["O", "X", "O"],
                    ["O", "O", "X"]];
console.log(matrix[0].join(' '));
console.log(matrix[1].join(' '));
console.log(matrix[2].join(' '));
}

function url(str){
    x = str.split(":");
    y = x[2].split("/");
    console.log(y[0]);

    x = str.split("/");
    y = x[2].split(":");
    console.log(y[1]);
}

function verdacht(){
    var personen = [{name: "Rev. Green", motive: 2},
                    {name: "Lady Red", motive: 3},
                    {name: "Mrs. White", motive: 0}];
    console.log(personen.filter(personen => personen.motive > 0).map(personen => personen.name)+" "+personen.map(personen => personen.motive).reduce((sum, motive) => sum + motive, 0));
}