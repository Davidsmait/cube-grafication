let noroeste = document.getElementById('noroeste')
let noreste = document.getElementById('noreste')
let suroeste = document.getElementById('suroeste')
let sureste = document.getElementById('sureste')

let cubo = document.getElementById('cubo')

let ejeX = 0
let ejeY = 0

noroeste.addEventListener('click', ()=>{
    ejeX+= 10
    ejeY-= 10
    cubo.style.transform = 'perspective(700px) rotateX(  '+ejeX+'deg ) rotateY(  '+ejeY+'deg )'
    
})

noreste.addEventListener('click', ()=> {
    ejeX+= 10
    ejeY+= 10
    cubo.style.transform = 'perspective(700px) rotateX(  '+ejeX+'deg ) rotateY(  '+ejeY+'deg )'
})

suroeste.addEventListener('click', ()=> {
    ejeX-= 10
    ejeY-= 10
    cubo.style.transform = 'perspective(700px) rotateX(  '+ejeX+'deg ) rotateY(  '+ejeY+'deg )'
})

sureste.addEventListener('click', ()=> {
    ejeX-= 10
    ejeY+= 10
    cubo.style.transform = 'perspective(700px) rotateX(  '+ejeX+'deg ) rotateY(  '+ejeY+'deg )'
})