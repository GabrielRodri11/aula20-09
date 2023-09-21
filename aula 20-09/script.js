console.log("arquivo de scripts esta sendo lido corretamente")

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")

btn1.addEventListener("click", funcaoA)

let cores = ["preto" , "vermelho" , "azul" , "verde"]

function funcaoA() {
    let n  = 4*Math.random();
    n = Math.floor(n);
    console.log(cores[n]);
        
    
}

btn2.addEventListener("Click", function () {
    setTimeout(function () {
        alert("XABLAU MAROTO")
    }, 3000)
})


btn3.addEventListener("click", function () {
    setInterval(funcaoA, 500);


})