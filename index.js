const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

async function main () {
const Carro = mongoose.model('Carro',
{
    Marca: String,
    Modelo: String,
    Preco: Number
})
    Carro.create({
        Marca: "BMW",
        Modelo: "BMW 320i",
        Preco: 100000
    })
    
    Carro.create({
        Marca: "Ferrari",
        Modelo: "250 GTO",
        Preco: 6000000
})
    
    await Carro.findOneAndUpdate(
        {Preco: 100000},
        {
            Marca: "Bugatti",
            nome: "Bugatti La Voiture Noire",
            Preco:95000000
          })
    await Carro.findOneAndDelete({Preco: 95000000})

    
    console.log(await Carro.find())

    console.log(await Carro.findOne({preco: 6000000}))

}

main()
        



