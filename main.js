const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

// const Produto = mongoose.model('Produto',
// {
//     codigo: Number,
//     nome: String,
//     preco: Number
// })

// async function criaNovoProduto(produto) {
//     await Produto.create(produto)
// }

// const produtos = [
//     {nome: "monitor", codigo: 1001, preco: 300},
//     {nome: "lorem", codigo: 12101, preco: 301320},
//     {nome: "dor", codigo: 1011201, preco: 30110}
// ]

// while(){
//     criaNovoProduto(produtos[])
// }

// let contador = 0

// while (contador<=3) {
//     contador ++
//     console.log(contador)
// }











// Marketplace








const Marketplace = mongoose.model('Marketplace',
{
    produto: String,
    preco: Number,
    CodigoDeBarras: Number
})

async function NovaMercado(produto) {
    await Marketplace.create(produto)
}

const lista = [
{produto: "arroz", preco: 10, CodigoDeBarras: 1353256},
{produto: "feijão", preco: 8, CodigoDeBarras: 6783218},
{produto: "Azeite", preco: 15, CodigoDeBarras: 9834703},
]

let ctrl = 0
while(ctrl < lista.length){
    NovaMercado(lista[ctrl].CodigoDeBarras, lista[ctrl].produto, lista[ctrl].preco);
    ctrl++;
}















// Mercadoria = true

// while(Mercadoria){
//     NovaMercado()
// }
// NovaMercado(Marketplace[1])