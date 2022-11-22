class VorrangIt{
    
    constructor(relations){
        this.relations = relations;

        function topSortStep() {
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
            return del
        }

        let RelationenIterator =  {
            [Symbol.iterator](){
                let cur
                return{
                    next(){
                        cur = topSortStep()
                        return  {done: false, value: cur}
                    }
                }
            }
        } 

    }
}

var relations = ([
    ["schlafen", "studieren"],
    ["essen", "studieren"],
    ["studieren", "prüfen"]
])

studentenLeben = new VorrangIt(relations)
for(const n of studentenLeben){
    console.log(n)
}