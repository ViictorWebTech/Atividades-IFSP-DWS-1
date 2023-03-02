function teclas() {
    console.log("a tecla foi reconhecida")
    var alinhamento = document.querySelector(".parag")
    if (event.key == "l"){
        alinhamento.style.textAlign = "left"
    }
    if (event.key == "c"){
        alinhamento.style.textAlign = "center"
    }
    if (event.key == "r"){
        alinhamento.style.textAlign = "right"
    }

}