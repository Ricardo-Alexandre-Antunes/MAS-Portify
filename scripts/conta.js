
var numbers = /[0-9]/g;
$(document).ready(function () {
    $("#myModal").hide
    document.getElementById("nome").value = localStorage.getItem("nome");
    document.getElementById("numero").value = localStorage.getItem("numero");
    document.getElementById("email").value = localStorage.getItem("email");
    document.getElementById("password").value = localStorage.getItem("pw");
    document.querySelector('input[name="interesses"]').value = localStorage.getItem("checked")


})

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function validate() {
    var retVal = true;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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
    if ((numero.value == "") || (isNaN(numero.value))) {
        retVal = false;
        numeroError.classList.add("d-block");
        numeroError.classList.remove("d-none");
    }
    else {
        numeroError.classList.remove("d-block");
        numeroError.classList.add("d-none");
    }
    var email = document.getElementById("email");
    var emailError = document.getElementById("emailError");
    if (!($("#email").val().trim().match(validRegex))) {
        retVal = false;
        emailError.classList.add("d-block");
        emailError.classList.remove("d-none");
    }
    else {
        emailError.classList.remove("d-block");
        emailError.classList.add("d-none");
    }
    var password = document.getElementById("password");
    var passwordError = document.getElementById("passwordError");
    if ((password.value == "" || password.value.length < 8)) {
        retVal = false;
        passwordError.classList.add("d-block");
        passwordError.classList.remove("d-none");
    }
    else {
        passwordError.classList.remove("d-block");
        passwordError.classList.add("d-none");
    }

    if ($('input[name="interesses"]:checked').length < 1) {
        checkboxError.classList.remove('d-none');
        checkboxError.classList.add('d-block');
        retval = false;
    }
    else {
         checkboxError.classList.remove("d-block");
         checkboxError.classList.add("d-none");
        }
    if (retVal == true) {
        $("#myModal").show()
    }
    
    return retVal
}
function savechanges() {
    var nome = document.getElementById("nome").value;
    console.log(nome)
    var password = document.getElementById("password").value
    var numero = document.getElementById("numero").value
    var email = document.getElementById("email").value
    var checked = document.querySelector('input[name="interesses"]:checked').value
    localStorage.setItem("nome", nome)
    localStorage.setItem("pw", password)
    localStorage.setItem("numero", numero)
    localStorage.setItem("email", email)
    localStorage.setItem("checked", checked)
}