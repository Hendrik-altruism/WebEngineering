
const webData = async () => {
    return await (await fetch("8_3.json")).json()
}

let field = 'home'

async function changeField(f) {
    field = f
}

const changeView = async (name) => {
    const data = await webData()
    const shownData = data[field][name]
    const elementLeft = document.getElementById('left')
    const main = document.querySelector('main')
    const elementRight = document.getElementById('right')

    elementLeft.innerHTML = `<h1>${name.toUpperCase()}:</h1>`
    if(name ==='home'){
        main.innerHTML = '<h3>Home Screen<h3>'
        elementRight.innerHTML = ''
    }else{
        main.innerHTML = `<p>${shownData.content}</p>`
        elementRight.innerHTML = `${shownData.references}`
    }
}

changeField('javascript')
changeView('function')







