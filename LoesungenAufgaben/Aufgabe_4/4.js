"use strict";

//4.1
function identify(param){
    return param
}

function identify_function(param){
    return function ident(){return param}
}

let add=(x, y) => y+x; 
let mul=(x, y) => y*x;

function addf(x){
    return function add(y){
        return x+y
    }
}

function applyf(x){
    return function addf(y){
        return function fun(z){
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
fibonacci(2000)
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
topSort([["schlafen","studieren"],["essen","studieren"],["studieren","prüfen"]])
function topSort(x){
    let finish = []
    sorted = false
    
}
