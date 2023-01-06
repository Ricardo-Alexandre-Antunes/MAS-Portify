new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 3,
    slideToClickedSlide: true,
});

var dict = {
    "data": [
        {
            "Id": 1,
            "Name": "Centro Playbowling Cascais",
            "District": "Lisboa",
            "Priceholder": 20,
            "Events": [
                {
                    "Id": 1,
                    "Name": "Bowling",
                    "Preço": 2
                },
                {
                    "Id": 2,
                    "Name": "Sala de Jogos",
                    "Preço": 2
                },
                {
                    "Id": 3,
                    "Name": "PaintBall",
                    "Preço": 25
                },
                {
                    "Id": 4,
                    "Name": "LaserMaze",
                    "Preço": 2
                }
            ],
            "Image": "./Imagens/Reservas/bowling.jog"
        },
        {
            "Id": 2,
            "Name": "Go Party",
            "District": "Lisboa",
            "Priceholder": 390,
            "Events": [
                {
                    "Id": 1,
                    "Name": "Festa Simples (sem lanche)",
                    "Preço": 26
                },
                {
                    "Id": 2,
                    "Name": "Festa – Menu Standard com Bolo de Aniversário Gelado Artisani",
                    "Preço": 28
                },
                {
                    "Id": 3,
                    "Name": "Festa – Menu Premium com Almoço ou Jantar e Bolo de Aniversário (inclui 30 minutos adicionais de festa)",
                    "Preço": 32
                }
            ],
            "Image": "./Imagens/Reservas/goparty.jpg"
        },
        {
            "Id": 3,
            "Name": "Lisbon Escape Hunt",
            "District": "Lisboa",
            "Priceholder": 35,
            "Events": [
                {
                    "Id": 1,
                    "Name": "Elite do Tempo",
                    "Preço": 35
                },
                {
                    "Id": 2,
                    "Name": "O mistério de Fernando Pessoa",
                    "Preço": 80
                },
                {
                    "Id": 3,
                    "Name": "Feira Popular",
                    "Preço": 80
                },
                {
                    "Id": 4,
                    "Name": "Introdução a uma Sociedade Secreta A",
                    "Preço": 80
                },
                {
                    "Id": 5,
                    "Name": "Introdução a uma Sociedade Secreta B",
                    "Preço": 80
                },
                {
                    "Id": 5,
                    "Name": "Introdução a uma Sociedade Secreta C",
                    "Preço": 80
                }
            ],
            "Image": "./Imagens/Reservas/escapehunt.jpg"
        },
        {
            "Id": 4,
            "Name": "JumpYard Lisboa",
            "District": "Lisboa",
            "Priceholder": 13,
            "Events": [
                {
                    "Id": 1,
                    "Name": "JumpTime (Individual)",
                    "Preço": 13
                },
                {
                    "Id": 2,
                    "Name": "JumpFamily (4 Pessoas)",
                    "Preço": 39
                }
            ],
            "Image": "./Imagens/Reservas/jumpyard.jpg"
        },
        {
            "Id": 5,
            "Name": "Fearzone - Paintball",
            "District": "Lisboa",
            "Priceholder": 150,
            "Events": [
                {
                    "Id": 1,
                    "Name": "FZKIDS",
                    "Preço": 15
                },
                {
                    "Id": 2,
                    "Name": "FZ100",
                    "Preço": 15
                },
                {
                    "Id": 3,
                    "Name": "FZ200",
                    "Preço": 20
                },
                {
                    "Id": 4,
                    "Name": "FZ300",
                    "Preço": 25
                },
                {
                    "Id": 5,
                    "Name": "FZ400",
                    "Preço": 30
                },
                {
                    "Id": 6,
                    "Name": "FZ500",
                    "Preço": 35
                },
                {
                    "Id": 7,
                    "Name": "FZNIGHT",
                    "Preço": 25
                },
                {
                    "Id": 7,
                    "Name": "FZMULTI",
                    "Preço": 25
                }
            ],
            "Image": "./Imagens/Reservas/fearzone.jpg"
        },
        {
            "Id": 6,
            "Name": "Aventuras no Bosque",
            "District": "Lisboa",
            "Priceholder": 270,
            "Events": [
                {
                    "Id": 1,
                    "Name": "Festa da Raposa – para pequenos e graúdos",
                    "Preço": 550
                },
                {
                    "Id": 2,
                    "Name": "Festa do Coelho – Aluguer do espaço",
                    "Preço": 270
                },
                {
                    "Id": 3,
                    "Name": "Festa do Mocho – Festas só para os mais pequenos",
                    "Preço": 320
                }
            ],
            "Image": "./Imagens/Reservas/bosque.jpg"
        },
        {
            "Id": 7,
            "Name": "Spacegarden",
            "District": "Lisboa",
            "Priceholder": 70,
            "Events": [
                {
                    "Id": 1,
                    "Name": "Sala + Terraço - Segunda a Sexta",
                    "Preço": 70
                },
                {
                    "Id": 2,
                    "Name": "Sala + Terraço - Sábado",
                    "Preço": 90
                },
                {
                    "Id": 3,
                    "Name": "Sala + Terraço - Domingo",
                    "Preço": 80
                },
                {
                    "Id": 4,
                    "Name": "Salão + Bar + Jardim",
                    "Preço": 95
                }
            ],
            "Image": "./Imagens/Reservas/spacegarden.jpg"
        },
        {
            "Id": 8,
            "Name": "Fintas",
            "District": "Lisboa",
            "Priceholder": 95,
            "Events": [
                {
                    "Id": 1,
                    "Name": "Futebol",
                    "Preço": 9.5
                },
                {
                    "Id": 2,
                    "Name": "Playground",
                    "Preço": 10.5
                },
                {
                    "Id": 3,
                    "Name": "MIX",
                    "Preço": 11.5
                },
                {
                    "Id": 4,
                    "Name": "Futebol+Escalada",
                    "Preço": 12.5
                },
                {
                    "Id": 5,
                    "Name": "Playground+Escalada",
                    "Preço": 13.5
                },
                {
                    "Id": 6,
                    "Name": "MIX + Escalada",
                    "Preço": 14.5
                }
            ],
            "Image": "./Imagens/Reservas/fintas.jpg"
        },
        {
            "Id": 9,
            "Name": "Marina Parque das Nações",
            "District": "Lisboa",
            "Priceholder": 185,
            "Events": [
                {
                    "Id": 1,
                    "Name": "Frozen",
                    "Preço": 290
                },
                {
                    "Id": 2,
                    "Name": "Jogos Tradicionais",
                    "Preço": 260
                },
                {
                    "Id": 3,
                    "Name": "Havaianas",
                    "Preço": 280
                },
                {
                    "Id": 4,
                    "Name": "Piscina de Bolas c/ Escorrega",
                    "Preço": 300
                },
                {
                    "Id": 5,
                    "Name": "Patrulha Pata + Insuflável Pequeno",
                    "Preço": 340
                },
                {
                    "Id": 6,
                    "Name": "Insuflável Grande com Animação",
                    "Preço": 300
                },
                {
                    "Id": 7,
                    "Name": "Touro Mecânico com animação",
                    "Preço": 430
                },
                {
                    "Id": 8,
                    "Name": "Lady Bug",
                    "Preço": 280
                },
                {
                    "Id": 9,
                    "Name": "PJ Masks",
                    "Preço": 290
                },
                {
                    "Id": 10,
                    "Name": "Unicórnio",
                    "Preço": 290
                },
                {
                    "Id": 11,
                    "Name": "Panda",
                    "Preço": 280
                },
                {
                    "Id": 12,
                    "Name": "Tartarugas Ninja",
                    "Preço": 280
                }
            ],
            "Image": "./Imagens/Reservas/fintas.jpg"
        },
        {
            "Id": 10
        },
        {
            "Id": 11
        },
        {
            "Id": 12
        },
        {
            "Id": 13
        },
        {
            "Id": 14
        },
        {
            "Id": 15
        }
    ]
};
console.log(dict)
self.html = ko.observable('')
$(document).ready(function () {
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
    ko.applyBindings(new HTMLwriter())
});
function HTMLwriter() {
    self.nome = ko.observable()
    self.mail = ko.observable()
    self.nome = localStorage.getItem('nome')
    self.mail = localStorage.getItem('email')
}
function logout() {
    var login = localStorage.setItem('login','false')
    login = 'false'
    console.log(login)
    window.location.reload();
}