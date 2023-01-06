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

function filterino(str) {
    let input = str
    found = false
    input = input.toLowerCase();
    console.log(input)
    let x = document.getElementsByClassName('card');
    console.log(x)
    for (let i = 0; i < x.length; i++) {
        let x1 = x[i];
        let x11 = x1.childNodes[1];
        let x111 = x11.childNodes[3];
        let x1111 = x111.childNodes;
        console.log(x1)
        console.log(x11)
        console.log(x111)
        console.log(x1111)
        for (let k = 1; k < x1111.length; k = k + 2) {
            console.log(x1111[k].nextSibling)
            let x11111 = x1111[k].nextSibling
            console.log(x11111)
            console.log(str)
            if (x11111.id == str || str == 'all') {
                console.log(x11111.id)
                console.log(str)
                found = true
                console.log(found)
            }
            if (found) {
                x[i].parentElement.style.display = "inline"
            }
            else {
                x[i].parentElement.style.display = "none"
            }

        }
    }



}