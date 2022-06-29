const textoQuantidadeRestanteDescricao = document.getElementById('quantidadeRestanteDescricao');
const textoQuantidadeRestanteTitulo = document.getElementById('quantidadeRestanteTitulo');

let contarQuantosCaracteresFaltam = (element, maxCaracteres) => {
    let descricaoTextArea = element.value.length;
    let resto = maxCaracteres - descricaoTextArea;
    
    if(element.id == 'descricao') {
        textoQuantidadeRestanteDescricao.innerHTML = `Possui ${resto} caracteres restantes.`;
        limparMensagemCaracteresRestantes("titulo")
    } else if (element.id == 'titulo') {
        textoQuantidadeRestanteTitulo.innerHTML = `Possui ${resto} caracteres restantes.`;
        limparMensagemCaracteresRestantes("descricao")
    }
}

let limparMensagemCaracteresRestantes = (element) => {
    switch (element) {
        case "titulo":
            textoQuantidadeRestanteTitulo.innerHTML = "";        
            break;
        case "descricao":
            textoQuantidadeRestanteDescricao.innerHTML = "";
            break;
        default:
            textoQuantidadeRestanteDescricao.innerHTML = "";
            textoQuantidadeRestanteTitulo.innerHTML = "";
            break;
    }
}