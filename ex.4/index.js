const produto = {
    nome: 'Caneta BIC Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto)
{
    return { ...objeto }
}

const novoproduto = clone(produto)
novoproduto.nome = 'Caneta BIC Azul'

console.log(produto, novoproduto)