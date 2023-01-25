//Typescript variablen werden anders benannt, damit VSC kein Fehler anzeigt, da die selbe Methode sonst mehrmals generiert wird
const myAddts = function(x: number, y: number): number{
    return x+y
}

const equalsts = function(x: any, y:any): boolean{
    return x===y
}

console.log(myAddts(1, 2))

console.log(equalsts(1, 1))