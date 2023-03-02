function passaMouse() {
    const bodyAlterar = document.querySelector("body")
    bodyAlterar.style.backgroundColor = "white"
    bodyAlterar.style.color = "black"
    bodyAlterar.style.transition = ".5s"

    document.querySelector("h2").innerHTML = "Lâmpada acesa"

    var imagem = document.querySelector("img")
    imagem.src = "lampada-acesa.png"


}

function tiraMouse() {
    const corBody = document.querySelector("body")
    corBody.style.backgroundColor = "black"
    corBody.style.color = "white"
    corBody.style.transition = ".5s"

    document.querySelector("h2").innerHTML = "Lâmpada apagada"

    var imagemNor = document.querySelector("img")
    imagemNor.src = "lampada.png"
    
    console.log("o mouse saiu de cima")
}
