var dict = {
    "orgs": [
        {   "Id": 1,
            "Name": "Playbowling",
            "District": "Lisboa",
            "Category": ["criancas", "adultos", "espaco", "recreativas"],
            "Priceholder": 1,
            "Image": "./Imagens/Reservas/bowling.jpg"
        },
        {
                "Id": 2,
                "Name": "Go Party",
                "District": "Lisboa",
                "Category": ["criancas", "espaco", "festas"],
                "Priceholder": 390,
                "Image": "./Imagens/Reservas/goparty.jpg"
        },
        {
            "Id": 3,
            "Name": "Lisbon Escape Hunt",
            "District": "Lisboa",
            "Category": ["criancas", "espaco", "recreativas", "adultos"],
            "Priceholder": 35,
            "Image": "./Imagens/Reservas/escapehunt.jpg"
        },
        {
            "Id": 4,
            "Name": "JumpYard Lisboa",
            "District": "Lisboa",
            "Category": ["criancas", "espaco", "recreativas", "adultos"],
            "Priceholder": 13,
            "Image": "./Imagens/Reservas/jumpyard.jpg"
        },
        {
            "Id": 5,
            "Name": "Fearzone _ Paintball",
            "District": "Lisboa",
            "Category": ["criancas", "espaco", "recreativas", "adultos"],
            "Priceholder": 150,
            "Image": "./Imagens/Reservas/fearzone.png"
        },
        {
            "Id": 6,
            "Name": "Aventuras no Bosque",
            "District": "Lisboa",
            "Category": ["criancas", "espaco", "festas"],
            "Priceholder": 270,
            "Image": "./Imagens/Reservas/bosque.jpg"
        },
        {
            "Id": 7,
            "Name": "Spacegarden",
            "District": "Lisboa",
            "Category": ["criancas", "espaco", "recreativas", "adultos"],
            "Priceholder": 70,
            "Image": "./Imagens/Reservas/spacegarden.jpg"
        },
        {
            "Id": 8,
            "Name": "Fintas",
            "District": "Lisboa",
            "Priceholder": 95,
            "Category": ["criancas", "espaco", "festas", "recreativas", "adultos"],
            "Image": "./Imagens/Reservas/fintas.jpg"
        },
        {
            "Id": 9,
            "Name": "Marina Parque das Nacoes",
            "District": "Lisboa",
            "Priceholder": 185,
            "Category": ["criancas", "espaco", "festas"],
            "Image": "./Imagens/Reservas/marina.jpg"
        },
        {
            "Id": 10,
            "Name": "Partyspot",
            "District": "Lisboa",
            "Category": ["criancas", "espaco", "festas"],
            "Priceholder": 215,
            "Image": "./Imagens/Reservas/Party_Spot.webp"
        },
        {
            "Id": 11,
            "Name": "To be kid",
            "District": "Lisboa",
            "Priceholder": 200,
            "Category": ["criancas", "espaco", "festas"],
            "Image": "./Imagens/Reservas/tobekid.webp"
        },
        {
            "Id": 12,
            "Name": "Casa do Impacto",
            "District": "Lisboa",
            "Priceholder": 120,
            "Category": ["espaco", "adultos"],
            "Image": "./Imagens/Reservas/impacto.jpg"
        }
    ],
"ativ": [
    {
            "Id": 1,
            "Name": "Museu de Arte, Arquitetura e Tecnologia",
            "District": "Lisboa",
            "Category": ["criancas", "museu", "adultos",],
            "Priceholder": 5,
            "Image": "./Imagens/Atividades/museudaarte.jpg"
    },
    {
            "Id": 2,
            "Name": "Museu Nacional dos Coches",
            "District": "Lisboa",
            "Priceholder": 7,
            "Category": ["criancas", "museu", "adultos",],
            "Image": "./Imagens/Atividades/museudoscoches.jpg"
    },
    {
            "Id": 3,
            "Name": "Museu Nacional de Arte Antiga",
            "District": "Lisboa",
            "Priceholder": 6,
            "Category": ["criancas", "museu", "adultos",],
            "Image": "./Imagens/Atividades/museudaarteantiga.jpg"
    },
    {
            "Id": 4,
            "Name": "Museu do Dinheiro",
            "District": "Lisboa",
            "Priceholder": 7,
            "Category": ["criancas", "museu", "adultos",],
            "Image": "./Imagens/Atividades/museudodinheiro.jpg"

        },
    {
            "Id": 5,
            "Name": "SportÃ¡gua",
            "District": "Lisboa",
            "Priceholder": 10,
            "Category": ["criancas", "adultos", "atividades"],
            "Image": "./Imagens/Atividades/sportagua.jpg"
    },
    {
            "Id": 6,
            "Name": "feijao-verde",
            "District": "Lisboa",
            "Priceholder": 13,
            "Category": ["criancas", "adultos", "atividades"],
            "Image": "./Imagens/Atividades/feijaoverde.png"
    },
    {
            "Id": 7,
            "Name": "HIPPOtrip",
            "District": "Lisboa",
            "Priceholder": 18,
            "Category": ["criancas", "adultos", "atividades"],
            "Image": "./Imagens/Atividades/hippotrip.jpg"
    },
    {
            "Id": 8,
            "Name": "Lugar dos Afetos",
            "District": "Aveiro",
            "Priceholder": 9,
            "Category": ["criancas", "adultos", "atividades"],
            "Image": "./Imagens/Atividades/lugardosafetos.jpg"
    },
    {
            "Id": 9,
            "Name": "Algarve fun",
            "District": "Algarve",
            "Priceholder": 11,
            "Category": ["criancas", "adultos", "atividades"],
            "Image": "./Imagens/Atividades/algarvefun.png"

    },
    {
            "Id": 10,
            "Name": "Aveiro Moments",
            "District": "Aveiro",
            "Category": ["criancas", "adultos", "espetador", "atividades"],
            "Priceholder": 0,
            "Image": "./Imagens/Atividades/aveiromoments.jpg"
    }
]
};

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
<<<<<<< HEAD
    console.log(data)
    self.data(dict.orgs);
    daterino = dict.orgs;
    daterino.push(daterino.Info)
    console.log(daterino[0]);
    self.info(daterino.Info)
    console.log(daterino[0].Info)
    console.log(daterino[1].Info)
    console.log(dict.orgs)
=======
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
        el.insertAdjacentHTML('afterbegin', content);
        console.log("ready!");
>>>>>>> 6d3265bb5a2a466104b39e0544b50b972700c5de
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