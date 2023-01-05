var nome = document.getElementById("nome");
var pw = document.getElementById("pw")
var numero = document.getElementById("numero")
var morada = document.getElementById("morada")
var email = document.getElementById("email")
var codigopostal = document.getElementById("codigopostal")
var numbers = /[0-9]/g;


var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
$('#conta').submit(function (event) {
    var retval = true

    if (nome.val().trim().length < 3 || nome.val().trim().length > 50) {
        if $("#nomeError").hasClass('d-none');
        $("#nomeError").removeClass('d-none');
        retval = false;
    }
    else {
        $("#nomeError").addClass('d-none');
    }
    if (pw.val().trim().length < 8 && !pw.value.match(numbers)) {
        if ($("#pwError").hasClass('d-none')); {
            $("#pwError").removeClass('d-none');
            retval = false;
        }
    }
    else {
        $("#pwError").addClass('d-none');
    }
    if (morada.val().trim().length < 5 || morada.val().trim().length > 50) {
        if ($("#moradaError").hasClass('d-none')) {
            $("#emailError").removeClass('d-none');
        }
        retval = false;
    }
    else {
        $("#moradaError").addClass('d-none');
    }
    if ($('input[name="interesses"]:checked').length < 1) {
        $("#interesses").removeClass('d-none');
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