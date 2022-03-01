console.log(`trabalhando com lista`)
const listadedestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
)
listadedestinos.push(`Belém`) // adicionando item na lista
console.log("destinos possiveis")
console.log(listadedestinos)


listadedestinos.splice(1,1) // posição (0,1,2...),qnt de elementos para apagar
console.log(listadedestinos)
console.log(listadedestinos[1], listadedestinos[0]) // exibe elemento na posição indicada