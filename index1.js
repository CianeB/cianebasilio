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


// async function exibeProdutos() {
//     console.log(await produto.find())
// }
// exibeProdutos()

async function main() {
    const Produto = mongoose.model('Produto',
    {
        codigo: Number,
        nome: String,
        preco:Number
    })

    // Produto.create({
    //     codigo:33,
    //     nome:'calca Balão',
    //     preco:67,
    // })


    await Produto.findOneAndUpdate(
        {preco:89},
        {preco:120}
        )

    //     await Produto.findOneAndDelete({preco:59})

        console.log(await Produto.find())


}

main()

