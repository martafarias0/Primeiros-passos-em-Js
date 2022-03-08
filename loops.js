console.log(`condicionais`)
const listadedestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)
const idadecomprador = 15
const estacompanhada = false
let passagemcomprada = false
const destino = 'Salvador'

console.log("destinos possiveis")
console.log(listadedestinos)

const compraautorizada = idadecomprador >= 18 || estacompanhada == true // || = OU    && = E

let contador = 0
let destinoexiste = false
while(contador<3){
    
    if (listadedestinos[contador] == destino){  // entre [] fica o lugar da lista que estamos observando
        destinoexiste = true
        break // quebra o laço no momento que encontrar a posição que corresponde ao destino. Para de executar o loop
    }  
    contador += 1 // pegar o valor e somar 1
}
 if (destinoexiste == true){
    console.log("Destino existe")
 }
 if (destinoexiste == false){
    console.log("Destino não existe")
 }
 if(compraautorizada == false){
    console.log("Compra não autorizada")
 }
 if(compraautorizada && destinoexiste){
    console.log("Compra autorizada")
    console.log("Boa viagem")
 }else{
    console.log("Entre em contato com a agência de viagens")
 }

//for(let cont = 0 ;cont < 3; cont ++){
//   if(listadedestinos[cont] == destino){
//        destinoexiste = true
//        break
//    }else{
//        destinoexiste = false
//    }
// }
