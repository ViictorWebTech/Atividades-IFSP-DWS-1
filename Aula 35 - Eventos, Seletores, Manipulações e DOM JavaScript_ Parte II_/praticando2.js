function adicionarParag() {
    const editar = document.querySelector('div#resposta') // Seleciona o Body para ser editável.

    var criarTexto = document.createElement('p') // A variável criarTexto recebe a criação de um parágrafo no documento. 
    criarTexto.textContent = 'Lorem ipsum dolor sit amet' // O texto que terá na variável criarTexto. 
    criarTexto.style.fontSize = "20px" // Edita o CSS do parágrafo.

    editar.appendChild(criarTexto) // Adiciona no body o que tiver na variável criarTexto.

    console.log("Clicou") // Ajudando reconhecer se está funcionando
}

function removerUmParag() {
    var removerTexto = document.querySelector('p') // Seleciona um parágrafo e coloca na variável removerTexto.

    removerTexto.remove() // Remove o que estiver selecionado na variável removerTexto. 

    console.log("Clicou") // Ajudando reconhecer se está funcionando
}

function removerTodosParag() {
    document.querySelector('#resposta').innerHTML = ""

    console.log("Clicou") // Ajudando reconhecer se está funcionando
}