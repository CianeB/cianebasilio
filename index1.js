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
        preco:Number,
    })}

    Produto.create({
        codigo:32,
        nome:'calca social',
        preco:89,

        codigo:33,
        nome:'calca jeans',
        preco:99,

        codigo:34,
        nome:'calca legging',
        preco:59,

        codigo:35,
        nome:'calca sarja',
        preco:79,
    })

    await Produto.findOneAndUpdate(
        {preco:99,}
        {preco:120}
        )

        await Produto.findOneAndDelete({preco:59})

