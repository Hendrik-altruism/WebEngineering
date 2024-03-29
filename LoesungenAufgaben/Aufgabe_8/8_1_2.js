let prom = () => {
    Promise.all([
    fetch('A.txt').then(x => x.text()),
    fetch('B.txt').then(x => x.text())
    ]).then(([texta, textb]) => {
        let arra = texta.split("\r\n");
        let arrb = textb.split("\r\n");
        let erg = []
        if(arra.length>=arrb.length){
            arrb.map((element, index) => arra[index] = arra[index].concat(element))
            erg = arra;
        }else{
            arra.map((element, index) => arrb[index] = arrb[index].concat(element))
            erg = arrb;
        }
        const initialVal = "";
        const eString = erg.reduce((accumulator, currentValue) => accumulator.toString() + "\n" + currentValue.toString(), initialVal);
    const h1 = document.createElement('h1')
    h1.innerHTML = "Promise Text"
    const f1 = document.createElement('div')
    f1.innerText = eString
    const b = document.querySelector('body')
    b.appendChild(h1)
        b.appendChild(f1)
    })
}

let asyn = async () => {
    const texta = await (await fetch('A.txt')).text();
    const textb = await (await fetch('B.txt')).text();
        let arra = texta.split("\r\n");
        let arrb = textb.split("\r\n");
        let erg = []
        if(arra.length>=arrb.length){
            arrb.map((element, index) => arra[index] = arra[index].concat(element))
            erg = arra;
            }else{
                arra.map((element, index) => arrb[index] = arrb[index].concat(element))
                erg = arrb;
            }
            const initialVal = "";
            const eString = erg.reduce((accumulator, currentValue) => accumulator.toString() + "\n" + currentValue.toString(), initialVal);
        const h1 = document.createElement('h1')
        h1.innerHTML = "Async Text"
        const f1 = document.createElement('div')
        f1.innerText = eString
        const b = document.querySelector('body')
        b.appendChild(h1)
            b.appendChild(f1) 
}

prom()
asyn()