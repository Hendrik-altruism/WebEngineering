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
    return newf = (x) => {
        return fun(x, x)
    }
}
let double = twice(add)
let square = twice(mul)
console.log(double(3))
console.log(square(3))

//Composeu Funktion
const composeu = (ufun1, ufun2) => {
    return newfu = (val1) => {
        return ufun2(ufun1(val1))
    }
}
console.log(composeu(double, square)(3))

//Composeb Funktion
const composeb = (bfun1, bfun2) => {
    return newfb = (x, y, z) => {
        return bfun2(z, bfun1(y, x))
    }
}
console.log(composeb(add, mul)(2, 3, 5))

//Once Funktion
const once = (fun1) => {
    let done = true
    return newf1 = (x, y) => {
        if(done){
            done = false
            return fun1(x, y)
        } else {
            return null
        }
    }
}
let add_once = once(add)
console.log(add_once(1,2))
console.log(add_once(1,2))

//Fabrikfunktion
const counterf = (x) => {
    return{ 
    inc: () => {
        return ++x;
    },
    dec: () => {
        return --x;
    }
    }
}
let counter = counterf(10)
console.log(counter.inc())
console.log(counter.dec())

//Revocable Funktion
const revocable = (fun1) => {
    let revoked = false
    return{
        invoke: (x,...y) => {
            if(!revoked){
                return fun1(x,...y);
            }else{
                console.log("Funktion already Revoked")
            }
        },
        revoke: () => {
            revoked = true;
        }
    }
}
let temp = revocable(add)
console.log(temp.invoke(7, 2))
temp.revoke()
temp.invoke(8)

//Array Wrapper
const vector = () => {
    let arr = []
    return{
    append: (x) => {
        arr.push(x)
    },
    store: (ind, val) => {
        arr[ind] = val;
    },
    get: (i) => {
        return arr[i]
    }
    }
}
let vtest = vector()
vtest.append(2)
vtest.store(1, 3)
console.log(vtest.get(1))
