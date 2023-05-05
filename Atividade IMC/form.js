var peso = document.getElementById("peso")
var altura = document.getElementById("altura")
var form = document.getElementById("form")
var texto = document.getElementById("texto")

function calculoIMC(event) {
    event.preventDefault()
    var imc = peso.value / (altura.value ** 2)
    if (imc < 18.5) {
        texto.innerHTML = "Abaixo do peso, seu IMC é: " + imc.toFixed(2)
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        texto.innerHTML = "Peso normal, seu IMC é: " + imc.toFixed(2)
    }
    else if (imc >= 25 && imc <= 29.9) {
        texto.innerHTML = "Sobrepeso, seu IMC é: " + imc.toFixed(2)
    }
    else if (imc >= 30 && imc <= 34.9) {
        texto.innerHTML = "Obesidade grau I, seu IMC é: " + imc.toFixed(2)
    }
    else if (imc >= 35 && imc <= 39.9) {
        texto.innerHTML = "Obesidade grau II, seu IMC é: " + imc.toFixed(2)
    }
    else if (imc >= 40.0) { texto.innerHTML = "Obesidade grau III, seu IMC é: " + imc.toFixed(2) }

}

form.addEventListener("submit", calculoIMC)
