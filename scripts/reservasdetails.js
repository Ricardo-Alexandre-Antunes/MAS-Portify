self.Events = ko.observableArray([]);
self.Id = ko.observable('');
self.Name = ko.observable('');
self.Price = ko.observable('');
self.OrgName = ko.observable('');
self.Image = ko.observable('');
self.Description = ko.observable('');
var id = getUrlParameter('id');
var self = this;
var boing = dict.orgs
self.events = ko.observableArray([]);
self.activate = function () {
    data = dict.orgs
    console.log(data)
    self.orgs(dict.orgs);

};
boingerino = boing[id - 1];
var info = boingerino.Info;
var events = info.Events;
var Ids = events.IdS;
console.log(events.Preco)
console.log(id);
console.log(info);
console.log(boingerino);
console.log(events);
self.Events(events);
self.Id(events.Id);
self.Name(events.Name);
self.Price(events.Preco);
self.Description(events.Descricao);
console.log(events.Descricao);
console.log(info.Name);
self.OrgName(info.Name);
self.Image(info.Image);
console.log(info.Image);

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

/*trimmed value binder for knockout*/
ko.bindingHandlers.trimedValue = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        $(element).on("change", function () {
            var observable = valueAccessor();
            var trimedValue = $.trim($(this).val());
            observable($(this).val());
            observable(trimedValue);
        });
    },
    update: function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        var trimedValue = $.trim(value);
        $(element).val(trimedValue);
    }
};

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    };
function HTMLwriter() {
    self.nome = ko.observable()
    self.mail = ko.observable()
    self.nome = localStorage.getItem('nome')
    self.mail = localStorage.getItem('email')
}
$(document).ready(function () {
    self.nome = ko.observable()
    self.nome = localStorage.getItem('nome')
    var login = localStorage.getItem("login");
    console.log(login)
    var el = document.getElementById('ola');
    if (login === 'true') {

        content = '<a href="carrinho.html"></a><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Bem Vindo, &nbsp;<span data-bind="text:nome"></span></a><ul class="dropdown-menu"><li><a class="dropdown-item" href="conta.html">Alterar dados e personalização</a></li><li><hr class="dropdown-divider"></li><li><btn class="dropdown-item" id="logout" onclick="logout()">Logout</btn></li></ul>'
    }
    else {
        content = '<a  style="color:white" class="nav-link active" aria-current="page" href="login.html">Login/Registo</a>'
    }
    console.log(content)
    console.log(login)
    el.insertAdjacentHTML('afterbegin', content);
    console.log("ready!");
    self.login =ko.observable(login)
    ko.applyBindings();
        
    });
// Update the current slider value (each time you drag the slider handle)
function sliderino(elem) {
    console.log(elem.id)
    var ids = elem.parentNode.parentNode.id
    console.log(elem.parentNode.parentNode.id);
    console.log(events)
    console.log(elem.id)
    console.log('preco' + ids)
    console.log(document.getElementById('preco' + ids).innerHTML)
    console.log(document.getElementById('precoadwa'))
    console.log(document.getElementById('output' + ids))
    document.getElementById('output' + ids).innerHTML = document.getElementById('preco' + ids).value;
}

function preco_total(elem) {
    var ids = elem.parentNode.parentNode.id
    console.log(document.getElementById('price' + ids).value)
    document.getElementById('price' + ids).value = document.getElementById('preco_fixo' + ids).innerHTML * document.getElementById('preco' + ids).value;
    document.getElementById('price' + ids).innerHTML = document.getElementById('preco_fixo' + ids).innerHTML * document.getElementById('preco' + ids).value;
}
self.html = ko.observable('')
self.html = ko.observable('')
function logout() {
    var login = localStorage.setItem('login', 'false')
    login = 'false'
    console.log(login)
    window.location.href(index.html);
}