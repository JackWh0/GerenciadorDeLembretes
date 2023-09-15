const textoQuantidadeRestanteDescricao = document.getElementById('quantidadeRestanteDescricao');
const textoQuantidadeRestanteTitulo = document.getElementById('quantidadeRestanteTitulo');
const maxCaracteresTitulo = 27;
const maxCaracteresDescricao = 255;
let quantidadeCaracteresTitulo = 0;
let quantidadeCaracteresDescricao = 0;
let clicadoAnterior = '';
let clicadoAtualmente = '';

let contarQuantosCaracteresFaltam = (element) => {
    let quantidadeCaracteres = element.value.length;

    if (element.id == 'descricao') {
        let resto = maxCaracteresDescricao - quantidadeCaracteres;
        textoQuantidadeRestanteDescricao.innerHTML = `Possui ${resto} caracteres restantes.`;
        limparMensagemCaracteresRestantes("titulo")
        quantidadeCaracteresDescricao = quantidadeCaracteres;
    } else if (element.id == 'titulo') {
        let resto = maxCaracteresTitulo - quantidadeCaracteres;
        textoQuantidadeRestanteTitulo.innerHTML = `Possui ${resto} caracteres restantes.`;
        quantidadeCaracteresTitulo = quantidadeCaracteres;
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

let verificarSeCaracteresTituloExcedemPermitido =() => {
    let excedeu = quantidadeCaracteresTitulo > maxCaracteresTitulo;
    if(excedeu){
        alert("Erro! Quantidade de caracteres no título ultrapassou o limite.\nLimite máximo: " + maxCaracteresTitulo + " caracteres.")
    }
    return excedeu;
}

let verificarSeCaracteresDescricaoExcedemPermitido = () => {
    let excedeu = quantidadeCaracteresDescricao > maxCaracteresDescricao;
    if(excedeu){
        alert("Erro! Quantidade de caracteres na descrição ultrapassou o limite.\nLimite máximo: " + maxCaracteresDescricao + " caracteres.")
    }
    return excedeu;
}

let verificarSePodeEnviar = () => {
    return !verificarSeCaracteresDescricaoExcedemPermitido() &&
            !verificarSeCaracteresTituloExcedemPermitido();
}

let definirDataPadrao = () => {
    let data = new Date();

    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();

    if (mes < 10) {
        mes = "0" + mes;
    } if (dia < 10) {
        dia = "0" + dia;
    }
    let hoje = ano + "-" + mes + "-" + dia;
    document.getElementById("data").value = hoje;
    document.getElementById("data").min = hoje;
}