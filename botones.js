// rotar
let noroeste = document.getElementById('noroeste')
let noreste = document.getElementById('noreste')
let suroeste = document.getElementById('suroeste')
let sureste = document.getElementById('sureste')

let cubo = document.getElementById('cubo')

let ejeX = 0
let ejeY = 0

let escalamiento = 1

noroeste.addEventListener('click', ()=>{
    ejeX+= 10
    ejeY-= 10
    cubo.style.transform = 'perspective(700px) rotateX(  '+ejeX+'deg ) rotateY(  '+ejeY+'deg ) scale3d('+escalamiento+','+escalamiento+','+escalamiento+')'
    
})

noreste.addEventListener('click', ()=> {
    ejeX+= 10
    ejeY+= 10
    cubo.style.transform = 'perspective(700px) rotateX(  '+ejeX+'deg ) rotateY(  '+ejeY+'deg ) scale3d('+escalamiento+','+escalamiento+','+escalamiento+')'
})

suroeste.addEventListener('click', ()=> {
    ejeX-= 10
    ejeY-= 10
    cubo.style.transform = 'perspective(700px) rotateX(  '+ejeX+'deg ) rotateY(  '+ejeY+'deg ) scale3d('+escalamiento+','+escalamiento+','+escalamiento+')'
})

sureste.addEventListener('click', ()=> {
    ejeX-= 10
    ejeY+= 10
    cubo.style.transform = 'perspective(700px) rotateX(  '+ejeX+'deg ) rotateY(  '+ejeY+'deg ) scale3d('+escalamiento+','+escalamiento+','+escalamiento+')'
})

// reducir

let reducir = document.getElementById('reducir')
let aumentar = document.getElementById('aumentar')



reducir.addEventListener('click', ()=> {
    escalamiento-= .10
    cubo.style.transform = 'perspective(700px) rotateX(  '+ejeX+'deg ) rotateY(  '+ejeY+'deg ) scale3d('+escalamiento+','+escalamiento+','+escalamiento+')'
})

aumentar.addEventListener('click', ()=>{
    escalamiento+= .10
    cubo.style.transform = 'perspective(700px) rotateX(  '+ejeX+'deg ) rotateY(  '+ejeY+'deg ) scale3d('+escalamiento+','+escalamiento+','+escalamiento+')'
})