var self = this;
self.data = ko.observableArray([]);
self.info = ko.observableArray([]);
self.activate = function () {
    console.log(data)
    daterino = dict.orgs;
    self.data(dict.orgs);
    console.log(dict.orgs)

   // banana = ??? -> filtro

};

$(document).ready(function () {
    console.log("ready!");
    console.log(data)
    self.data(dict.orgs);
    daterino = dict.orgs;
    daterino.push(daterino.Info)
    console.log(daterino[0]);
    self.info(daterino.Info)
    console.log(daterino[0].Info)
    console.log(daterino[1].Info)
    console.log(dict.orgs)
        self.nome = ko.observable()
        self.nome = localStorage.getItem('nome')
        var login = localStorage.getItem("login");
        console.log(login)
        var el = document.getElementById('ola');
        if (login === 'true') {

            content = '<a href="carrinho.html"></a><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Bem Vindo, &nbsp;<span data-bind="text:nome"></span></a><ul class="dropdown-menu"><li><a class="dropdown-item" href="conta.html">Alterar dados e personaliza��o</a></li><li><hr class="dropdown-divider"></li><li><btn class="dropdown-item" id="logout" onclick="logout()">Logout</btn></li></ul>'
        }
        else {
            content = '<a  style="color:white" class="nav-link active" aria-current="page" href="login.html">Login/Registo</a>'
        }
        console.log(content)
        el.insertAdjacentHTML('afterbegin', content);
        console.log("ready!");
    ko.applyBindings();
});
self.html = ko.observable('')
self.html = ko.observable('')


function logout() {
    var login = localStorage.setItem('login', 'false')
    login = 'false'
    console.log(login)
    window.location.href(index.html);
}