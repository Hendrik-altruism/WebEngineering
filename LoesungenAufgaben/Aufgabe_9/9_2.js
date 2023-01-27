const fetchData = async ()=> {
    return await ((await fetch("covid.json")).json())
}

async function createChart(){
    const data = await fetchData()
    let pos = 1;
    let max = 0;
    for (const [key, value] of Object.entries(data.Fallzahlen)) { if(value>max) max=value;}
    for (const [key, value] of Object.entries(data.Fallzahlen)) {
        const lineHeight = (value/max)*6.5
        let toggle = 7.8;
        if(pos%2===0){toggle = 8.2;}
        document.querySelector('.chart').innerHTML += `
        <g>
        <line class="bar" x1="${pos}" y1="${7.5-lineHeight}" x2="${pos}" y2="7.5"></line>
        <text text-anchor="middle" x="${pos}" y="${toggle}">${key}</text>
        <text text-anchor="middle" x="${pos}" y="${7.5-lineHeight-0.2}">${value}</text>
        </g>`
        pos++;
    }
}

createChart()

