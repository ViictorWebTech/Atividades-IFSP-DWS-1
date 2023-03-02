function passaMouse(cor) {
    const bodyCor = document.querySelector("body") // Variável body vai receber o body inteiro.
    bodyCor.style.backgroundColor = cor // Variável body vai ter o background alterado para o que tiver em cor que está definido no div.

    console.log("o mouse está em cima")
}

function tiraMouse() {
    const corBody = document.querySelector("body")
    corBody.style.backgroundColor = "white"
    
    console.log("o mouse saiu de cima")
}


