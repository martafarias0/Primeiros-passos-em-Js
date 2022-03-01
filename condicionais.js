console.log(`condicionais`)
const listadedestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
)
const idadecomprador = 15
const estacompanhada = false
const passagemcomprada = true

console.log("destinos possiveis")
console.log(listadedestinos)

if (
    idadecomprador >= 18 || estacompanhada == true) { // || = OU    && = E
    console.log("comprador autorizado")
    listadedestinos.splice(1, 1) // remover lista
} else {
    console.log("comprador menor de idade sem acompanhante. Não posso vender")
}

console.log(listadedestinos)

console.log('Embarque: /n/n')
if(idadecomprador >= 18 || estacompanhada== true && passagemcomprada== true){
    console.log("embarque autorizado")
} else{
    console.log("embarque negado")
}


