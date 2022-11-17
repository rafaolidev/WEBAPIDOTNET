//Modais
var modal = document.getElementById("myModal");
var modalProfessor = document.getElementById("myModal-produto");
var modalUsuario = document.getElementById("myModal-movimentacao");
var modalUsuarioUpdate = document.getElementById("myModal-update-user");
var modalProdutoUpdate = document.getElementById("myModal-update-product");

//botão de ativação de modal
var btn = document.getElementById("myBtn");
var btnProfessor = document.getElementById("myBtn-produto");
var btnUsuario = document.getElementById("myBtn-movimentacao");
var btnUsuarioUpdate = document.getElementById("myBtn-editar-user");
var btnProdutoUpdate = document.getElementById("myBtn-editar-produto");

//botão para fechar o modal
var span = document.getElementsByClassName("close")[0];
var spanProfessor = document.getElementsByClassName("close-produto")[0];
var spanUsuario = document.getElementsByClassName("close-movimentacao")[0];
var spanUsuarioUpdate = document.getElementsByClassName("close-update-user")[0];
var spanProdutoUpdate = document.getElementsByClassName("close-update-product")[0];

//Funções para abrir e fechar o modal
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
btnProfessor.onclick = function() {
  modalProfessor.style.display = "block";
}
spanProfessor.onclick = function() {
  modalProfessor.style.display = "none";
}
btnUsuario.onclick = function() {
  modalUsuario.style.display = "block";
}
spanUsuario.onclick = function() {
  modalUsuario.style.display = "none";
}
btnUsuarioUpdate.onclick = function() {
  modalUsuarioUpdate.style.display = "block";
}
spanUsuarioUpdate.onclick = function() {
  modalUsuarioUpdate.style.display = "none";
}
btnProdutoUpdate.onclick = function() {
modalProdutoUpdate.style.display = "block";
}
spanProdutoUpdate.onclick = function() {
    modalProdutoUpdate.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal || event.target == modalProfessor) {
    modal.style.display = "none";
    modalProfessor.style.display = "none";
    modalUsuário.style.display = "none";
  }
}