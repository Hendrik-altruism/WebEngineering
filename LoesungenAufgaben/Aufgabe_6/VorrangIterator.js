function topSortStep(relations) {
    const Larr = []
    const Rarr = []
    relations.forEach(element => {
        Larr.push(element[0])
        Rarr.push(element[1])
    });
    const EL = Larr.concat(Rarr);
    const distinctEl = [...new Set(EL)];
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
    return [del, relations]
} 

class VorrangIt{   
    constructor(rel){
        this.ar = rel
    }   
    [Symbol.iterator]() {
            let cur = this.ar
            return{
                next(){
                    let out = topSortStep(cur)
                    cur = out[1];
                    return  {done: typeof(out[0]==="undefined"), value: out[0]}
                }
            }
    }
}

let studentenLeben = new VorrangIt([
    ["schlafen", "studieren"],
    ["essen", "studieren"],
    ["studieren", "prüfen"]
])

for(const n of studentenLeben){
    console.log(n)
}