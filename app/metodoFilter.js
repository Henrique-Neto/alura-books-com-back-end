const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtroDisponibilidade() : filtroCategoria(categoria);
    exibiLivrosTela(livrosFiltrados);
    if (categoria == 'disponivel'){
        const ValorTotal = calculaValorTotalLivros(livrosFiltrados);
        exibirValorTotalLivros(ValorTotal);
    }
}

function filtroCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtroDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalLivros (ValorTotal){

    elementoValorTotalLivros.innerHTML = 
    `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${ValorTotal}</span></p>
    </div>   
    
    `
}