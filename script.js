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
var imgAtual = "assets/doceria.jpg";
var imgAnterior = "assets/master.jpg";
 
function trocar(){     document.getElementById("figura").src = imgAtual;
let aux = imgAtual;
imgAtual = imgAnterior;
imgAnterior = aux;
}
