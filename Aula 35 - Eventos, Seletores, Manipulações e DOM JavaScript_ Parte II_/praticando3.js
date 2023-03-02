function aumentar(param){
    var imagem = document.querySelector(".imagemGrandona")
    imagem.style.display = '' 
    imagem.src = param

    var apagarb = document.querySelector('button')
        apagarb.style.visibility = 'visible' 
    
}
function apagar(){
    var apagarImg = document.querySelector(".imagemGrandona")
    apagarImg.style.display = 'none'  
    //apagarImg.remove()

    var apagarb = document.querySelector('button')
        apagarb.style.visibility = 'hidden' 
}

