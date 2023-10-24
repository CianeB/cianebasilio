// Importação de Arq. Ext:
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');


// Modelo:
const Produto = mongoose.model('Produto',
{
    codigo: Number,
    nome: String,
    preco:Number
})




// Função Criar Array de Produto
// async function criaNovoProduto(args){
//     const tamanho = args.length;
//     let contador=0;
//     while(contador <= tamanho){ 
//         await Produto.create(args[contador]);
//         contador++;
//     }
// }


// Função Criar Array de Produto 1
async function criaMultiplosProdutos1 (vetorDeProdutos, quantidadeDeProdutos) {
    let contador = 0
    while (contador <= quantidadeDeProdutos -1) {
        criaProduto(vetordeProdutos[contador])
        contador++
    }
}

const produtos = [
    {
        nome: "Arroz",
        preco:1,
        codigo:kasds5d21,
        disponivel:true,
    },

    {
        nome: "Feijao",
        preco:1,
        codigo:kasds5d21,
        disponivel:true,
    },

    {
        nome: "Macarrao",
        preco:1,
        codigo:kasds5d21,
        disponivel:true,
    },

    {
        nome: "Maizena",
        preco:1,
        codigo:kasds5d21,
        disponivel:true,
    },

    {
        nome: "Arroz",
        preco:1,
        codigo:kasds5d21,
        disponivel:true,
    },
]

// Função Editar
async function atualizaProduto(nomeAProcurar, novoCodigo, novoNome, novoPreco) {
    await Produto.findOneAndUpdate(
        {nome: nomeAProcurar},
        {
            codigo: novoCodigo,
            nome: novoNome,
            preco: novoPreco
        }
    )
}

// Função Delete
async function deletaProduto(nomeADeletar){
    await Produto.findOneAndDelete({nome: nomeADeletar})
}

// Função Cria Produto:
async function exibeProdutos() {
    console.log(await Produto.find())
}


// Array de Produto
const produtos = [
    {nome: "monitor", codigo: 1001, preco: 300},
    {nome: "lorem", codigo: 12101, preco: 301320},
    {nome: "dor", codigo: 1011201, preco: 30110}
    
]



// Chamadas de Função
// criaNovoProduto()
atualizaProduto("monitor", 1001, "monitor", 400)
//  deletaProduto("dor")
//  exibeProdutos()
