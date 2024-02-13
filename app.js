const listEncoder = [
  ['e', 'enter'],
  ['i', 'imes'],
  ['a', 'ai'],
  ['o', 'ober'],
  ['u', 'ufat']
];


//remove accent and set to lowercase, get from stackoverflow https://stackoverflow.com/a/37511463

function normalizeString(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function convert(originalString, listType) {
  originalString = normalizeString(originalString);

  for (let i = 0; i < listType.length; i++) {
    const originalChar = listType[i][0];
    const replacement = listType[i][1];
    const regex = new RegExp(originalChar, 'g');
    originalString = originalString.replace(regex, replacement);
  }
  return originalString;
}

function revert(modifiedString, listType) {

  for (let i = 0; i < listType.length; i++) {
    const originalChar = listType[i][0];
    const replacement = listType[i][1];
    const regex = new RegExp(replacement, 'g');
    modifiedString = modifiedString.replace(regex, originalChar);
  }
  return modifiedString;
}

function encoder() {
  const originalString = document.getElementById('field-txt').value;
  const convertedString = convert(originalString, listEncoder);
  document.getElementById('saida-de-texto').value = convertedString;
  document.querySelector('.decoder').style.backgroundImage = "url('/assets/imgs/winners-flatline.svg')";
  showMessage('codificarSucesso', 'O Conteúdo foi codificado com sucesso!');
  enableButtons();
}

function decoder() {
  const modifiedString = document.getElementById('field-txt').value;
  const revertedString = revert(modifiedString, listEncoder);
  document.getElementById('saida-de-texto').value = revertedString;
  showMessage('decodificarSucesso', 'O Conteúdo foi decodificado com sucesso!');
  enableButtons();
}

function revertText() {
  const modifiedString = document.getElementById('saida-de-texto').value;
  const originalString = revert(modifiedString, listEncoder);
  document.getElementById('saida-de-texto').value = originalString;
  showMessage('reverterSucesso', 'O Conteúdo foi revertido com sucesso!');
 
}

function copyText() {
  const stringToCopy = document.getElementById('saida-de-texto');
  stringToCopy.select();
  document.execCommand('copy');
  showMessage('copiarSucesso', 'O Conteúdo foi copiado com sucesso!');
}

function checkInput(inputId, codifyButtonId, decodifyButtonId) {
  const inputValue = document.getElementById(inputId).value;
  const codifyButton = document.querySelector(codifyButtonId);
  const decodifyButton = document.querySelector(decodifyButtonId);

  if (inputValue) {
    codifyButton.removeAttribute('disabled');
    decodifyButton.removeAttribute('disabled');
  } else {
    codifyButton.setAttribute('disabled', 'disabled');
    decodifyButton.setAttribute('disabled', 'disabled');
  }
}


// load focus to textarea

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("field-txt").focus();

});

function enableButtons(){

  document.querySelector('.buttonCopy').removeAttribute('disabled');
  document.querySelector('.buttonRevert').removeAttribute('disabled');

}

function showMessage(div, message) {
  
  const divMessage = document.getElementById(div);
  divMessage.innerText = message;
  divMessage.style.display = 'block';

  setTimeout(() => {
    divMessage.innerText = '';
    divMessage.style.display = 'none';
  }, 3000);
}

//To adjust height between encoder and decoder divs//

window.addEventListener('load', () => {
  adjustDecoderHeight();
});

function adjustDecoderHeight() {
  const encoderHeight = document.querySelector('.encoder').offsetHeight;
  document.querySelector('.decoder').style.height = encoderHeight + 'px';
}

window.addEventListener('resize', () => {
  adjustDecoderHeight();
});


