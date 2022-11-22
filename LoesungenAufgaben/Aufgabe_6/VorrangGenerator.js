var relations = ([
    ["schlafen", "studieren"],
    ["essen", "studieren"],
    ["studieren", "prüfen"]
])

class VorrangGen{

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

        const RelationenIterator = {
            [Symbol.iterator]: function*(){
                let cur 
                for(;;){
                    cur = topSortStep()
                    yield cur;
                }
            }
        } 

        for(const n of RelationenIterator){
            if(typeof(n)==="undefined"){
                break;
            }
            console.log(n)
        }
    }
}

f = new VorrangGen(relations)