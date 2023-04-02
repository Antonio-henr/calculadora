const num = document.querySelectorAll(".num") 
const display = document.getElementById("resultado")
const op = document.querySelectorAll(".op") 
const op2 = document.querySelectorAll(".op2") 
const clear = document.getElementById("limpar")
const igual = document.getElementById("igual")
const vir = document.getElementById("virgula")


var operacoes= true


//para numeros
num.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        if (display.innerHTML=="0") {
            display.innerHTML=""
        }

        if (operacoes==false) {
            virguladonum = true
            
        }

        display.innerHTML+=evt.target.innerHTML
        operacoes = true
    })
    
   
})


//operadores + e -
op.forEach((ek)=>{
    ek.addEventListener("click",(op)=>{
        if (operacoes==true) {
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
        display.innerHTML+=op.target.innerHTML;
        operacoes = false
        virgulado = true
        }


    })
    
   
})

//operadores / e *
op2.forEach((ek)=>{
    ek.addEventListener("click",(op2)=>{
        if (operacoes==true&&display.innerHTML!="0") {
        display.innerHTML+=op2.target.innerHTML;
        operacoes = false
        virgulado = true
        }


    })  
})

//limpar
clear.addEventListener("click",()=>{
    display.innerHTML = "0"
    operacoes= true
    virgulado = true
    virguladonum = true

})


//virgula
var virgulado= true
var virguladonum= true
     vir.addEventListener("click",(pi)=>{
        if (virgulado==true&&virguladonum==true){
        display.innerHTML+=","
        virgulado = false
        virguladonum = false
    }
    })



//resultado

    igual.addEventListener("click",()=>{
        display.innerHTML= eval(display.innerHTML)
    })
    
   
