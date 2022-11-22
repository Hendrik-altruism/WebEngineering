"use strict";

//4.1
function identify(param){
    return param
}

function identify_function(param){
    return function ident(){return param}
}

function add(x, y){ return y+x;} 
function mul(x, y){ return y*x;}

function addf(x){
    return function (y){
        return x+y
    }
}

function applyf(x){
    return function (y){
        return function (z){
            return x(y, z);
        }    
    }
}

//4.2
var Auto = {
    toString: function(){
        return 'Auto ' + this.name;
    }
}

var Dacia = {
    __proto__: Auto,
    name: 'Dacia'
}

var Peter = {
    auto: Dacia,
    name: "Peter"
}

var Kevin = {
    auto: Dacia,
    name: "Kevin"
}

function conflict(){
    return Peter.auto == Kevin.auto
}

//4.3
//79    -> Maximaler Integer    (8944394323791464)     
//1477  -> Maximale Number      (1.3069892237633987e+308)
fibonacci(100)
function fibonacci(amount){
    let prev = BigInt(0);
    console.log(prev)
    let akt = BigInt(1);
    console.log(akt)
    for(let x = 2; x<amount; x++){
        let y = BigInt(prev+akt)
        console.log(y);
        prev = akt;
        akt = y;
    }
}

//4.4

console.log(topSort([
    ["schlafen", "studieren"],
    ["essen", "studieren"],
    ["studieren", "prüfen"]
]))

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



