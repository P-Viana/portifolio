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




//Código para o Typing Effect
var i = 0;
var txt = 'Bem-vindo ao meu portfólio!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("escrevertexto").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()
