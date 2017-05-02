var endScroll = 0;
window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  var scroll = window.pageYOffset || document.body.scrollTop;
  if (scroll > endScroll) {
    header.classList.add("header-color");
  }
  else{
    header.classList.remove("header-color");
  }
})
//Visible inputs
document.getElementById("visible").addEventListener("click",function () {
  var inputHidden = document.getElementsByClassName("input-box");
  inputHidden[1].style.display="block";
  inputHidden[2].style.display="block";
  inputHidden[3].style.display="block";
})

//Validacion
var letras = function (e) {
    var codLetra = e.keyCode;
    if ((codLetra>=97 && codLetra<=122) || (codLetra>=65 && codLetra<=90) || codLetra == 39 || codLetra == 32 || codLetra==241 || codLetra==209) {
      return true;
    }
    else {
      return false;
    }
}
var numeros = function(e) {
    var codNumero = e.keyCode;
    if ((codNumero>=48 && codNumero<=57)) {
      return true;
    }
    else {
      return false;
    }
}

var inputText = document.getElementsByClassName("input");
inputText[0].onkeypress=numeros;
inputText[1].onkeypress=letras;
inputText[3].onkeypress=letras;

var error = document.getElementsByClassName("icon");
var cantBuenas = 0;
function validacion(indice,validacion) {
  if (!validacion.test(inputText[indice].value)) {
    error[indice].style.display="inline-block";
    inputText[indice].style.borderColor = "red";
  }
  else{
    cantBuenas++;
    error[indice].style.display="none";
    inputText[indice].style.borderColor = "";
  }
}
inputText[0].addEventListener("blur", function () {
  validacion(0,/9[0-9]{8}/);
});

inputText[1].addEventListener("blur",function () {
  validacion(1,/([A-Z]{1}[a-zñáéíóú]\D+)$/);
})
inputText[2].addEventListener("blur", function () {
  validacion(2,/\S+@\S+\.\S+/);
})
inputText[3].addEventListener("blur",function () {
  validacion(3,/([A-Z]{1}[a-zñáéíóú]\D+)$/);
})

document.getElementsByClassName("button")[0].addEventListener("click",function () {

})
