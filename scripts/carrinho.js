
$(document).ready(function () {
	console.log("ready!")

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
	$cart.innerHTML = items.map((item) => `<tr>
						<td>#${item.nome}</td>
						<td>${item.atividade}</td>
						<td>${item.ppp}</td>
						<td>${item.np}</td>
						<td>${item.pt}</td>
						<td class="text-right"><Button class="btn btn-primary" onclick="deleterino(this, ${item.pt})">Delete</Button></td>
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

function deleterino(elem, pt) {
	var items = JSON.parse(localStorage.getItem('carrinho'));
	const $total = document.querySelector(".total")
	console.log(pt)
	$total.innerHTML = $total.innerHTML - pt
	elem.parentNode.parentNode.remove(elem);



}