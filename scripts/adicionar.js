$("#myModal").hide();
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

    if ($('input[name="interesses"]:checked').length < 1) {
        checkboxError.classList.remove('d-none');
        checkboxError.classList.add('d-block');
        retval = false;
    }
    else {
        checkboxError.classList.remove("d-block");
        checkboxError.classList.add("d-none");
    }
    var ativ = document.getElementById("ativ");
    var ativError = document.getElementById("ativError");
    if (ativ.value == "") {
        retVal = false;
        ativError.classList.add("d-block");
        ativError.classList.remove("d-none");
    } else {
        ativError.classList.remove("d-block");
        ativError.classList.add("d-none");
    }
    var city = document.getElementById("city");
    var cityError = document.getElementById("cityError");
    if (city.value == "") {
        retVal = false;
        cityError.classList.add("d-block");
        cityError.classList.remove("d-none");
    } else {
        cityError.classList.remove("d-block");
        cityError.classList.add("d-none");
    }
    var morada = document.getElementById("morada");
    var moradaError = document.getElementById("moradaError");
    if (morada.value == "") {
        retVal = false;
        moradaError.classList.add("d-block");
        moradaError.classList.remove("d-none");
    } else {
        moradaError.classList.remove("d-block");
        moradaError.classList.add("d-none");
    }
    console.log(retVal)
    if (retVal == true) {
        console.log("ola2")
        alert("Pedido enviado, aguarde o nosso contacto!")
        window.location.href("index.html")
    }

    return retVal
}