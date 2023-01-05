var nome = document.getElementById("nome");
var pw = document.getElementById("pw")
var numero = document.getElementById("numero")
var morada = document.getElementById("morada")
var email = document.getElementById("email")
var codigopostal = document.getElementById("codigopostal")
var numbers = /[0-9]/g;


var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
$('#formsfaqs').submit(function (event) {
    var retval = true

    if (nome.val().trim().length < 3 || nome.val().trim().length > 50) {
        $("#nomeError").removeClass('d-none');
        retval = false;
    }
    else {
        $("#nomeError").addClass('d-none');
    }
    if (pw.val().trim().length < 8) or (!pw.value.match(numbers)) or (!pw) {
        $("#pessoa2Error").removeClass('d-none');
        retval = false;
    }
    else {
        $("#pessoa2Error").addClass('d-none');
    }
    if ($("#email").val().trim().length < 10 || $("#email").val().trim().length > 100) {
        if ($("#emailError").hasClass('d-none')) {
            $("#emailError").removeClass('d-none');
        }
        retval = false;
    }
    else if (!($("#email").val().trim().match(validRegex))) {
        if ($("#emailError").hasClass('d-none')) {
            $("#emailError").removeClass('d-none');
        }
        retval = false;
    }
    else {
        $("#emailError").addClass('d-none');
    }
    if ($('input[name="duvtipo"]:checked').length < 1) {
        $("#duvtipoError").removeClass('d-none');
        retval = false;
    }

    else {
        $("#duvtipoError").addClass('d-none');
    }
    if ($("#duvida").val().trim().length < 20 || $("#duvida").val().trim().length > 200) {
        $("#duvidaError").removeClass('d-none');
        retval = false;
    }
    else {
        $("#duvidaError").addClass('d-none');
    }
    return retval
})
if (email.value.length == 0) {
    (nome.val().trim().length < 3 || nome.val().trim().length > 50)
    alert('Por favor preencha este mail');
}