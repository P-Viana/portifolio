var testa = 0;
var darktheme = document.body;

function darkMode()
{
  //Tentar salvar os valores do modo escuro/ claro.
  localStorage.setItem("active-mode", testa);
  document.getElementsByClassName("buttontema").innerHTML = localStorage.getItem("active-mode");
  
   if(testa == 0)
   {
    //Ativar o DarkMode
    darktheme.classList.toggle("dark-mode");
    document.getElementById('emailicon').style.fill = "white";
    document.getElementById('githubicon').style.fill = "white";
    //Mudar o valor para depois mudar o tema de novo
    testa = 1;
   }
   else
   {
    //Ativar o DarkMode
    darktheme.classList.toggle("dark-mode");
    document.getElementById('emailicon').style.fill = "black";
    document.getElementById('githubicon').style.fill = "black";
   //Mudar o valor para depois mudar o tema de novo
    testa = 0;
   }
}
//O código para o modal está aqui embaixo
// para pegar o model
var modal = document.getElementById("modalResposta");

// Get the button that opens the modal
var btn = document.querySelector("#submit");

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

function mostrar(){
  modal.classList.toggle("show")
}

span.addEventListener("click", ()=>{
  modal.classList.toggle("show")
})  