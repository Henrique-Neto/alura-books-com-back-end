let btnOrdernarPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdernarPreco.addEventListener('click', ordenarLivrosPrecos);

function ordenarLivrosPrecos(){
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibiLivrosTela(livrosOrdenados)
}