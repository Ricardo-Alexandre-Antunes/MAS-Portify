
$(document).ready(function () {
	console.log("ready!")
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
	ko.applyBindings(new HTMLwriter());
});
function adicionar(elem) {
	var items = JSON.parse(localStorage.getItem('carrinho'));
    ids = elem.parentNode.id
    var nome = document.getElementById("company").innerHTML;
    var atividade = document.getElementById(ids + "-tab").innerHTML
	var ppp = document.getElementById("preco_fixo" + ids).innerHTML
	console.log(document.getElementById('output' + ids))
    var np = document.getElementById('output' + ids).innerHTML
	var pt = document.getElementById('price' + ids).innerHTML
	console.log({ "nome": nome, "atividade": atividade, "ppp": (ppp), "np": np, "pt": pt })
	items.push({ "nome": nome, "atividade": atividade, "ppp": parseInt(ppp), "np": parseInt(np), "pt": parseInt(pt) })
	console.log(items)
	localStorage.setItem("carrinho", JSON.stringify(items))
}


function renderCart(items) {
	const $cart = document.querySelector(".cart")
	const $total = document.querySelector(".total")
	var items = JSON.parse(localStorage.getItem('carrinho'));
	$cart.innerHTML = items.map((item) => `
						<td>#${item.nome}</td>
						<td>${item.atividade}</td>
						<td>${item.ppp}</td>
						<td>${item.np}</td>
						<td>${item.pt}</td>
						<td class="text-right"><Button class="btn btn-primary">Delete</Button></td>
					</tr>`).join("")

	$total.innerHTML = total(items) + "€"
}
renderCart(cartLS.list())
cartLS.onChange(renderCart)
function total(dict) {
	var a = 0
	dict.forEach((item, index) => { 
		a += parseFloat(item.pt)
	});
	return a
}
function loadmodal() {
	alert("Pagamento Efetuado!")
}
function HTMLwriter() {
	self.nome = ko.observable()
	self.mail = ko.observable()
	self.nome = localStorage.getItem('nome')
	self.mail = localStorage.getItem('email')
}
function logout() {
	var login = localStorage.setItem('login', 'false')
	login = 'false'
	console.log(login)
	window.location.reload();
}