var relations = ([
    ["schlafen", "studieren"],
    ["essen", "studieren"],
    ["studieren", "prüfen"]
])

console.log(relations)
console.log(topSortStep())
console.log(relations)
console.log(topSortStep())
console.log(relations)
console.log(topSortStep())
console.log(relations)
console.log(topSortStep())
console.log(relations)
console.log(topSortStep())

function topSortStep() {
    const Larr = []
    const Rarr = []
    this.relations.forEach(element => {
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
    if(relations.length===1){
        del = relations[0][0]
        relations[0].shift()
    }else{
    this.relations = relations.filter(function(value, index, arr){
        return value[0]!=del;
    })
    }
    return del
}



/*class Vorrang{
    constructor(relations){
        this.relations = relations;



        let sol = {
            [Symbol.iterator](){
                let cur = topSortStep()
                return{
                    next(){
                        cur = relations[][0] 
                    }
                }
            }
        } 
    }

    topSortStep() {
    const Larr = []
    const Rarr = []
    this.relations.forEach(element => {
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
    if(relations.length===1){
        del = relations[0][0]
        relations[0].shift()
    }else{
    this.relations = relations.filter(function(value, index, arr){
        return value[0]!=del;
    })
    }
    return del
    }
}*/