//Declaração de Variáveis (Boas Práticas)
let arrayNumerico = []
let tamanhoArray = 0

//Função de ordenação por Inserção
function arrayInsertionSort(){
    let temp = 0
    for (let i = 1; i < tamanhoArray; i++){
	    temp = arrayNumerico[i]
	    j=i-1
	    //arrayNumerico[0] = temp
	    while (temp < arrayNumerico[j]){
            arrayNumerico[j+1] = arrayNumerico[j]
            j--
        }
        arrayNumerico[j+1] = temp
    }
}

//Inicialização de valores
arrayNumerico = [1,0,3,2,5,4,7,6,9,8,11,10,13,12,15,14,17,16,19,18,21,20,23,22,25,24,27,26,29,28,31,30,33,32,35,34,37,36,39,38,41,40,43,42,45,44,47,46,49,48,51,50]
tamanhoArray = arrayNumerico.length
//Compara tempo de execução
let inicio = performance.now()
arrayInsertionSort()
let fim = performance.now()
//Escreve array ordenado no console e tempo de execução
console.log("A ordenação foi executava em: ",(fim-inicio)," ms")
console.log(arrayNumerico)