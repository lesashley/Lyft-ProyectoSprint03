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
inputText[0].addEventListener("blur", function () {
  if (!/9[0-9]{8}/.test(inputText[0].value)) {
    error[0].style.display="inline-block";
    inputText[0].style.borderColor = "red";
  }
  else{
    error[0].style.display="none";
    inputText[0].style.borderColor = "";
  }
});

inputText[1].addEventListener("blur",function () {
  if (!/([A-Z]{1}[a-zñáéíóú]\D+)$/.test(inputText[1].value)) {
    error[1].style.display="inline-block";
    inputText[1].style.borderColor = "red";
  }
  else{
    error[1].style.display="none";
    inputText[1].style.borderColor = "";
  }
})
inputText[2].addEventListener("blur", function () {
  if (!/\S+@\S+\.\S+/.test(inputText[2].value)) {
    error[2].style.display="inline-block";
    inputText[2].style.borderColor = "red";
  }
  else{
    error[2].style.display="none";
    inputText[2].style.borderColor = "";
  }
})
inputText[3].addEventListener("blur",function () {
  if (!/([A-Z]{1}[a-zñáéíóú]\D+)$/.test(inputText[3].value)) {
    error[3].style.display="inline-block";
    inputText[3].style.borderColor = "red";
  }
  else{
    error[3].style.display="none";
    inputText[3].style.borderColor = "";
  }
})
