
// load focus to textarea
document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("field-txt").focus();
  
});

document.getElementById("field-txt").addEventListener("input", function() {

  const campoTexto = this.value;
  const botaoCriptografar = document.getElementById('criptText');
  const botaoDescriptografar = document.getElementById('decriptText');

  if (campoTexto.length === 0) {
      botaoCriptografar.disabled = true;
      botaoDescriptografar.disabled = true;
  
  } else {
      botaoCriptografar.disabled = false;
      botaoDescriptografar.disabled = false;
  }

});