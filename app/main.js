let livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosAPI();


async function getBuscarLivrosAPI(){
    const res = await fetch(endpointAPI);
    livros = await res.json();
    //console.log(livros);
    let livrosComDesconto = aplicarDesconto(livros);
    exibiLivrosTela(livrosComDesconto);
}

