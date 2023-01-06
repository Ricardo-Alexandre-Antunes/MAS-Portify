
$(document).ready(function () {
	const linha = JSON.parse(localStorage.getItem('carrinho'));
	console.log(linha)
});
function adicionar(elem) {
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
					<tr>
						<td>#${item.nome}</td>
						<td>${item.atividade}</td>
						<td>${item.ppp}</td>
						<td>(${item.np}</td>
						<td>(${item.pt}</td>
						</td>
						<td class="text-right">${item.pt}</td>
						<td class="text-right"><Button class="btn btn-primary" onClick="cartLS.remove(${item.id})">Delete</Button></td>
					</tr>`).join("")

	$total.innerHTML =  + cartLS.total() + "€"
}
renderCart(cartLS.list())
cartLS.onChange(renderCart)