//Identity-Function
const identify_function = (param) => {
    return ident = () => {return param}
}
console.log(identify_function(1)())

//Addition, Multiplikation
const add = (x, y) => { return y+x;} 
const mul = (x, y) => { return y*x;}

//Addf function
const addf = (x) => {
    return addxy = (y) => {
        return x+y
    }
}
console.log(addf(1)(2))

//Applyf function
const applyf = (x) => {
    return addx = (y) => {
        return addy = (z) => {
            return x(y, z);
        }    
    }
}
console.log(applyf(add)(1)(2))

//Curry-Methode
const curry = (fun, val) => {
    return afun = (b) => {
        return fun(val, b);
    }
}
console.log(curry(add, 3)(4))

//Inc Funktion
let inc1 = addf(1)
let inc2 = applyf(add)(1)
let inc3 = curry(add, 1)
console.log(inc1(1))
console.log(inc2(1))
console.log(inc3(1))

//Methodize
const methodize = (fun) => {
    return //Todo 
}

//Demethodize
//Todo

//Twice Funktion
const twice = (fun) => {
    return tw = (x) => {
        this.fun(x, x)
    }
}
console.log(twice(add))