const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

// const produto = mongoose.model('produto', {produto: String, codigo: Number, nome: String, preco: Number});

// const modeloDeProduto = new produto({
//     produto:'biscoito', 
//     codigo: 987654, 
//     nome: 'Sheetos', 
//     preco: 5});
// modeloDeProduto.save()
// console.log("Salvou")




// async function main() {
    const Produto = mongoose.model('Produto',
    {
        codigo: Number,
        nome: String,
        preco:Number
    })

    async function exibeProdutos() {
        console.log(await Produto.find())
    }
    exibeProdutos()

//     // Produto.create({
//     //     codigo:33,
//     //     nome:'calca Balão',
//     //     preco:67,
//     // })


//     await Produto.findOneAndUpdate(
//         {preco:89},
//         {preco:120}
//         )

//     //     await Produto.findOneAndDelete({preco:59})

//         console.log(await Produto.find())


// }

// main()

const produtos = [
    {nome: "monitor", codigo: 1001, preco: 300},
    {nome: "lorem", codigo: 12101, preco: 301320},
    {nome: "dor", codigo: 1011201, preco: 30110}
    
]

async function criaNovoProduto(args){
    const tamanho = args.length;
    let contador=0;
    while(contador <= tamanho){ 
        await Produto.create(args[contador]);
        contador++;
    }
}
// criaNovoProduto(produtos)


// criaProdutos(produto:"monitor", codigo:1001, preco:300, 0){
//     await Produto
// }


