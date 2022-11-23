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


class VorrangProxy{
    constructor(rel){
        this.relation = rel;
    }
    [Symbol.iterator](){
        let cur = this.relation
        return{
            next(){
                let obj = topSortStep(cur)
                cur = obj[1]
                return  {done: typeof(obj[0])==="undefined", value: obj}
            }
        }
    }
}

let studentenLebenProxy = new VorrangProxy([
    ["schlafen", "studieren"],
    ["essen", "studieren"],
    ["studieren", "prüfen"]
])

const proxy = new Proxy(studentenLebenProxy,{
        get(target, prop, reciever){
            let erg = topSortStep(target.relation)
            target.relation = erg[1]
            return erg
        }
    })

console.log(proxy.next)
console.log(proxy.next)
console.log(proxy.next)
console.log(proxy.next)