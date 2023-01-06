items = []

function adicionar(elem) {
    ids = elem.parentNode.id
    var nome = document.getElementById("company").innerHTML;
    var atividade = document.getElementById(ids + "-tab").innerHTML
	var ppp = document.getElementById("preco_fixo" + ids).innerHTML
	console.log(document.getElementById('output' + ids))
    var np = document.getElementById('output' + ids).innerHTML
	var pt = document.getElementById('price' + ids).innerHTML
	console.log({ "nome": nome, "atividade": atividade, "ppp": ppp, "np": np, "pt": pt })
	items.push({ "nome": nome, "atividade": atividade, "ppp": ppp, "np": np, "pt": pt })
	console.log(items)
	localStorage.setItem("carrinho", JSON.stringify(items))
}


function renderCart(items) {
	const $cart = document.querySelector(".cart")
	const $total = document.querySelector(".total")

	$cart.innerHTML = items.map((item) => `
					<tr>
						<td>#${item.id}</td>
						<td>${item.name}</td>
						<td>${item.quantity}</td>
						<td style="width: 60px;">	
							<button type="button" class="btn btn-block btn-sm btn-outline-primary"
								onClick="cartLS.quantity(${item.id},1)">+</button>
						</td>
						<td style="width: 60px;">	
							<button type="button" class="btn btn-block btn-sm btn-outline-primary"
								onClick="cartLS.quantity(${item.id},-1)">-</button>
						</td>
						<td class="text-right">$${item.price}</td>
						<td class="text-right"><Button class="btn btn-primary" onClick="cartLS.remove(${item.id})">Delete</Button></td>
					</tr>`).join("")

	$total.innerHTML = "$" + cartLS.total()
}
renderCart(cartLS.list())
cartLS.onChange(renderCart)