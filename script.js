const logar = document.querySelector(".logar")
const entrar_login = document.querySelector(".entrar_login")
const entrar = document.querySelector(".entrar")

function login(){
	logar.style.display = "inherit"
	entrar_login.style.display = "inherit"
}

logar.addEventListener("click", fora)

function fora(){
	logar.style.display = "none"
	entrar_login.style.display = "none"
}
entrar.addEventListener("click", login)

//
function carConteudo(){
  document.getElementById("conteudo").innerHTML = " E-mail: suafranquia@mundodoce.com.br";
  
}

///
function mouseOver(){
  document.getElementById("mouseAlt").innerHTML = "Confeitamos com amor e carinho!";
}

function mouseOut(){
  document.getElementById("mouseAlt").innerHTML = "Seja bem vindo ao Mundo Doce!";
}

///
var imgAtual = "https://colombianabroad.com/wp-content/uploads/2015/09/hello-kitty-cafe-seul-13-600x399.jpg";
var imgAnterior = "https://img.freepik.com/fotos-premium/tres-jovens-cozinheiras-em-uniformes-brancos-confiantemente-voltadas-para-a-camera_917664-161673.jpg";
 
function trocar(){     document.getElementById("figura").src = imgAtual;
let aux = imgAtual;
imgAtual = imgAnterior;
imgAnterior = aux;
}
