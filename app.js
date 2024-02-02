

// ao carregar dá o foco no txtarea para começar a digitar
document.addEventListener("DOMContentLoaded", function() {
    let texto = document.getElementById("entrada-txt");
    texto.focus();
    texto.setSelectionRange(texto.value.length, texto.value.length);
});


function criptografar() {
  let texto = document.getElementById("entrada-txt").value;

  const substituicao = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat",
  };

  // substituindo cada vogal pelas sequências definidas no objeto replacements. O resultado final é armazenado na variável resultadoFinal.
  const resultadoFinal = texto.toLowerCase().replace(/[aeiou]/g, match => substituicao[match]);

  insereResposta(resultadoFinal);
  insereBotaoCopiar();
}

function descriptografar() {
  let textoCriptografado = document.getElementById("entrada-txt").value;

  const substituicao = {
    "ai": "a",
    "enter": "e",
    "imes": "i",
    "ober": "o",
    "ufat": "u",
  };

  const resultadoFinal = textoCriptografado.replace(/ai|enter|imes|ober|ufat/g, match => substituicao[match]);

  insereResposta(resultadoFinal);
  insereBotaoCopiar();
}


function insereResposta(txtResposta){
  const gridItem = document.querySelector(".image-result");
  let campoResposta = document.getElementById('resposta');

  campoResposta.textContent = txtResposta;
  gridItem.style.backgroundImage = "url('assets/imgs/authentication-flatline-48804.svg')";
}

function insereBotaoCopiar(){
    const botaoExists = document.getElementById("botaoCopyResp");
    if(botaoExists != null){
        botaoExists.remove();
    }

    const botao = document.createElement("button");
    botao.textContent = "Copiar";
    botao.setAttribute("id", "botaoCopyResp");
    botao.onclick = function(){
        let campoResposta = document.getElementById('resposta');
        navigator.clipboard.writeText(campoResposta.innerHTML);
    };
    const campoInserir = document.getElementById("campo-resp");
    campoInserir.appendChild(botao);
}

// verifica se há algum caractere no campo input, se zero altera a imagem
document.addEventListener("keyup", function(event) {

  if (event.key === "Backspace") {
    let campoTexto = document.getElementById("entrada-txt").value;
    if(campoTexto.length == 0){
      const imagem = document.querySelector(".image-result");
      imagem.style.backgroundImage = "url('assets/imgs/password-flatline.svg')";
    }
  }
});


document.getElementById("entrada-txt").addEventListener("input", function() {
  const campoTexto = this.value.trim(); // remove espaços em branco no início e no final
  const botaoCriptografar = document.getElementById('criptText');
  const botaoDescriptografar = document.getElementById('decriptText');

  if (campoTexto.length === 0) {
      botaoCriptografar.disabled = true;
      botaoDescriptografar.disabled = true;
      const imagem = document.querySelector(".image-result");
      imagem.style.backgroundImage = "url('assets/imgs/password-flatline.svg')";
  } else {
      botaoCriptografar.disabled = false;
      botaoDescriptografar.disabled = false;
  }
});