var nome = document.getElementById("nome");
var pw = document.getElementById("pw")
var numero = document.getElementById("numero")
var morada = document.getElementById("morada")
var email = document.getElementById("email")
var codigopostal = document.getElementById("codigopostal")
var numbers = /[0-9]/g;



var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function validate() {
    var retVal = true;

    var nome = document.getElementById("nome");
    var nomeError = document.getElementById("nomeError");
    if (nome.value == "") {
        retVal = false;
        nomeError.classList.add("d-block");
        nomeError.classList.remove("d-none");
    } else {
        nomeError.classList.remove("d-block");
        nomeError.classList.add("d-none");
    }
    var numero = document.getElementById("numero");
    var numeroError = document.getElementById("numeroError");
    if ((numero.value == "") || (numero.isNaN() == true)) {
        retVal = false;
        numeroError.classList.add("d-block");
        numeroError.classList.remove("d-none");
    }
    else {
        numeroError.classList.remove("d-block");
        numeroError.classList.add("d-none");
    }
    if ((morada.value == "") || (morada.length() == true)) {
        retVal = false;
        numeroError.classList.add("d-block");
        numeroError.classList.remove("d-none");
    }
    else {
        numeroError.classList.remove("d-block");
        numeroError.classList.add("d-none");
    }
    nome.value = "";
    numero.value = "";
    return retVal;
}