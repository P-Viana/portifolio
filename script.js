function darkmode(){
  const darkelement = document.body
  if (check.checked) {
      darkelement.classList.add("dark-mode")
      localStorage.setItem("darktheme",  "true")
  }
  else{
      darkelement.classList.remove("dark-mode")
      localStorage.setItem("darktheme",  "false")
  }
}

addEventListener("DOMContentLoaded", ()=>{
  const darkMOdeStatus = localStorage.getItem("darktheme");
  if (darkMOdeStatus === "true") {
      check.checked = true;
  }
  else{
      
     check.checked = false
  }
  darkmode();
})

check.addEventListener("change", darkmode);


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