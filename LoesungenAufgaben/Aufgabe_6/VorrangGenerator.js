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


class VorrangGen{
    constructor(rel){
        this.relation = rel;
    }
    * [Symbol.iterator](){
        let cur = this.relation; 
        for(;;){
            let obj = topSortStep(cur)
            cur = obj[1]
            yield obj[0];
        }
    }
}

let studentenLebenGen = new VorrangGen([
    ["schlafen", "studieren"],
    ["essen", "studieren"],
    ["studieren", "prüfen"]
])

for(const n of studentenLebenGen){
    if(typeof(n)==="undefined"){
        break;
    }
    console.log(n)
}
