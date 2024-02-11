const listEncoder = [
  ['e', 'enter'],
  ['i', 'imes'],
  ['a', 'ai'],
  ['o', 'ober'],
  ['u', 'ufat']
];

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



  // Faça algo com a string convertida, como exibi-la em algum lugar ou executar outras operações
}

function decoder() {
  const modifiedString = document.getElementById('field-txt').value;
  const revertedString = revert(modifiedString, listEncoder);
  document.getElementById('saida-de-texto').value = revertedString;
}
function reverter() {
  const modifiedString = document.getElementById('saida-de-texto').value;
  const originalString = revert(modifiedString, listEncoder);
  document.getElementById('saida-de-texto').value = originalString;
}


//////UTILS//////////////
//funções adicionais para melhorar usabilidade do codificador


// load focus to textarea
document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("field-txt").focus();

});


function copiar() {
  const stringToCopy = document.getElementById('saida-de-texto');
  stringToCopy.select();
  document.execCommand('copy');
}

