let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarCarrinho(produto, preco) {
  carrinho.push({ produto, preco });
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert(produto + " adicionado ao carrinho!");
}
