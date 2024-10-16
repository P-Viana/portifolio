
//O código para o modal está aqui embaixo
// Para pegar o model
var modal = document.getElementById("modalResposta");
// O botão que vai abrir o modal
var btn = document.querySelector("#submit");
// O <span> que vai fechar o modal
var span = document.querySelector(".close");

function mostrar(){
  modal.classList.toggle("show")
}

span.addEventListener("click", ()=>{
  modal.classList.toggle("show")
})  
