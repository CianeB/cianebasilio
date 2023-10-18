const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test');

const CatModel = mongoose.model('Cat', { name: String });

const CatModel // define uma constante chamada Cat,

const GatoModelo = mongoose.model('gato',{
    raça: String,
    idade: Number,
    cor: String 
})

const GatoQueAcheiNaRua = new GatoModelo({
    raça: "Siames",
    idade:3,
    cor:"Branco"
})

GatoQueAcheiNaRua.save() .then(console.log("Gato salvo com sucesso"))
