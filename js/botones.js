let cubo = document.getElementById('cubo')

//mover

let arriba = document.getElementById('arriba')
let izquierda = document.getElementById('izquierda')
let centro = document.getElementById('centro')
let derecha = document.getElementById('derecha')
let abajo = document.getElementById('abajo')

let traslacionX = 0
let traslacionY = 0

// rotar
let noroeste = document.getElementById('noroeste')
let noreste = document.getElementById('noreste')
let suroeste = document.getElementById('suroeste')
let sureste = document.getElementById('sureste')


let ejeX = 0
let ejeY = 0
//escalamiento
let escalamiento = 1


let variable = 10;

arriba.addEventListener('click', ()=>{
    traslacionY -= 10
    cubo.style.transform = 'perspective(700px) rotateX(  '+ejeX+'deg ) rotateY(  '+ejeY+'deg )  scale3d('+escalamiento+','+escalamiento+','+escalamiento+') translateX('+traslacionX+'px) translateY('+traslacionY+'px)'
    
})

izquierda.addEventListener('click', ()=>{
    traslacionX -= 10
    cubo.style.transform = 'perspective(700px) rotateX(  '+ejeX+'deg ) rotateY(  '+ejeY+'deg )  scale3d('+escalamiento+','+escalamiento+','+escalamiento+') translateX('+traslacionX+'px) translateY('+traslacionY+'px)'
    
})

centro.addEventListener('click', ()=>{
    traslacionX = 0
    traslacionY = 0
    ejeX = 0
    ejeY = 0
    escalamiento = 1
    cubo.style.transform = 'perspective(700px) rotateX(  '+ejeX+'deg ) rotateY(  '+ejeY+'deg )  scale3d('+escalamiento+','+escalamiento+','+escalamiento+') translateX('+traslacionX+'px) translateY('+traslacionY+'px)'
    
})

derecha.addEventListener('click', ()=>{
    traslacionX += 10
    cubo.style.transform = 'perspective(700px) rotateX(  '+ejeX+'deg ) rotateY(  '+ejeY+'deg )  scale3d('+escalamiento+','+escalamiento+','+escalamiento+') translateX('+traslacionX+'px) translateY('+traslacionY+'px)'
    
})

abajo.addEventListener('click', ()=>{
    traslacionY += 10
    cubo.style.transform = 'perspective(700px) rotateX(  '+ejeX+'deg ) rotateY(  '+ejeY+'deg )  scale3d('+escalamiento+','+escalamiento+','+escalamiento+') translateX('+traslacionX+'px) translateY('+traslacionY+'px)'
    
})




noroeste.addEventListener('click', ()=>{
    ejeX+= 10
    ejeY-= 10
    cubo.style.transform = 'perspective(700px) rotateX(  '+ejeX+'deg ) rotateY(  '+ejeY+'deg )  scale3d('+escalamiento+','+escalamiento+','+escalamiento+') translateX('+traslacionX+'px) translateY('+traslacionY+'px)'
    
})

noreste.addEventListener('click', ()=> {
    ejeX+= 10
    ejeY+= 10
    cubo.style.transform = 'perspective(700px) rotateX(  '+ejeX+'deg ) rotateY(  '+ejeY+'deg )  scale3d('+escalamiento+','+escalamiento+','+escalamiento+') translateX('+traslacionX+'px) translateY('+traslacionY+'px)'
})

suroeste.addEventListener('click', ()=> {
    ejeX-= 10
    ejeY-= 10
    cubo.style.transform = 'perspective(700px) rotateX(  '+ejeX+'deg ) rotateY(  '+ejeY+'deg )  scale3d('+escalamiento+','+escalamiento+','+escalamiento+') translateX('+traslacionX+'px) translateY('+traslacionY+'px)'
})

sureste.addEventListener('click', ()=> {
    ejeX-= 10
    ejeY+= 10
    cubo.style.transform = 'perspective(700px) rotateX(  '+ejeX+'deg ) rotateY(  '+ejeY+'deg )  scale3d('+escalamiento+','+escalamiento+','+escalamiento+') translateX('+traslacionX+'px) translateY('+traslacionY+'px)'
})

// reducir

let reducir = document.getElementById('reducir')
let aumentar = document.getElementById('aumentar')



reducir.addEventListener('click', ()=> {
    escalamiento-= .10
    cubo.style.transform = 'perspective(700px) rotateX(  '+ejeX+'deg ) rotateY(  '+ejeY+'deg )  scale3d('+escalamiento+','+escalamiento+','+escalamiento+') translateX('+traslacionX+'px) translateY('+traslacionY+'px)'
})

aumentar.addEventListener('click', ()=>{
    escalamiento+= .10
    cubo.style.transform = 'perspective(700px) rotateX(  '+ejeX+'deg ) rotateY(  '+ejeY+'deg )  scale3d('+escalamiento+','+escalamiento+','+escalamiento+') translateX('+traslacionX+'px) translateY('+traslacionY+'px)'
})