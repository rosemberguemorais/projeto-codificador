function TextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

TextoTela('h4', 'Apenas letras minúsculas e sem acento.');
TextoTela('p', 'Digite um texto que você deseja criptografar ou descriptografar.');

let textoDeEntrada = document.querySelector('.conteudo_texto_textoDeEntrada_ladoEsquerdo');
let textoDeSaida = document.querySelector('.conteudo_ladoDireito_texto_textoDeSaida');
let mensagemErro = document.querySelector('.mensagemErro');
let matrizCriptografia = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufa"]];

ocultarBotaoCopiar();
ocultarBotaoLimpar();

function Criptografia() {
    let texto = textoDeEntrada.value;
    if (validarTexto(texto)) {
        let resultadoCriptografado = criptografia(texto.toLowerCase());
        textoDeSaida.value = resultadoCriptografado;
        mostrarElementos();
        limparMensagemErro();
        ocultarMensagem();

    } else {
        exibirErro("O texto deve conter apenas letras minúsculas e números!");
    }
}

function validarTexto(texto) {
    let regex = /^[a-z0-9\s\n]*$/;
    return regex.test(texto);
}

function exibirErro(mensagem) {
    mensagemErro.innerHTML = mensagem;
    mensagemErro.style.display = 'block';
}

function limparMensagemErro() {
    mensagemErro.innerHTML = '';
    mensagemErro.style.display = 'none';
}

function Descriptografia() {
    let texto = textoDeEntrada.value;
    if (validarTexto(texto)) {
        let resultadoTraduzido = descriptografia(texto);
        textoDeSaida.value = resultadoTraduzido;
        mostrarElementos();
        limparMensagemErro();
        ocultarMensagem();

    } else {
        exibirErro("O texto deve conter apenas letras minúsculas e números!");
    }
}

function criptografia(textoParaCriptografar) {
    for (let i = 0; i < matrizCriptografia.length; i++) {
        if (textoParaCriptografar.includes(matrizCriptografia[i][0])) {
            textoParaCriptografar = textoParaCriptografar.replaceAll (matrizCriptografia[i][0], matrizCriptografia[i][0]);
    }
    }
    return textoParaCriptografar;
}

function descriptografia(textoParaDescriptografar) {
    for (let i = 0; i < matrizCriptografia.length; i++) {
        if (textoParaDescriptografar.includes(matrizCriptografia[i][1])) {
            textoParaDescriptografar = textoParaDescriptografar.replaceAll(matrizCriptografia[i][1], matrizCriptografia[i][0]);
        }
    }
    return textoParaDescriptografar;
}

function copiarTexto() {
    textoDeSaida.select();
    textoDeSaida.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoDeSaida.value);
    mostrarMensagemSucesso();
}

function mostrarMensagemSucesso() {
    let mensagemSucesso = document.querySelector('.mensagemSucesso');
    mensagemSucesso.style.display = 'block';
    setTimeout(function () {
        mensagemSucesso.style.display = 'none';
    }, 2000);
}

function mostrarBotaoCopiar() {
    let botaoCopiar = document.querySelector('.botaoCopiar');
    botaoCopiar.style.display = 'inline-block';
}

function ocultarBotaoCopiar() {
    let botaoCopiar = document.querySelector('.botaoCopiar');
    botaoCopiar.style.display = 'none';
}

function mostrarElementos() {
    let textoCriptografado = textoDeSaida.value.trim();
    if (textoCriptografado !== '') {
        textoDeSaida.style.display = 'block';
        ocultarImagemMensagem();
        mostrarBotaoCopiar();
        mostrarBotaoLimpar();
    } else {
        ocultarBotaoCopiar();
        ocultarBotaoLimpar();
        textoDeSaida.style.display = 'none';
    }
}

function ocultarImagemMensagem() {
    let imagemMensagem = document.querySelector('.conteudo_imagem_ladoDireito');
    imagemMensagem.style.display = 'none';
}

function ocultarElementos() {
    textoDeSaida.style.display = 'none';
    ocultarBotaoCopiar();
    ocultarBotaoLimpar();
}

function limparTextoSaida() {
    textoDeSaida.value = "";
    textoDeEntrada.value = "";
    ocultarElementos();
    ocultarMensagem();
}

function mostrarBotaoLimpar() {
    let botaoLimpar = document.querySelector('.botaoLimpar');
    botaoLimpar.style.display = 'inline-block';
}

function ocultarBotaoLimpar() {
    let botaoLimpar = document.querySelector('.botaoLimpar');
    botaoLimpar.style.display = 'none';
}

function ocultarMensagem() {
    if (textoDeSaida.value.trim() === '') {
        document.getElementById('conteudo_texto_ladoDireito').style.display = 'block';
    } else {
        document.getElementById('conteudo_texto_ladoDireito').style.display = 'none';
    }
}