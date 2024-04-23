//Exercício 1

/*let nomeUsuario
let emailUsuario

//dados
nomeUsuario = prompt("Digite seu nome")
emailUsuario = prompt("Digite seu e-mail")

//mensagem 
console.log(" O e-mail " + emailUsuario + " foi cadastrado com sucesso. Seja bem vinda(o), " + nomeUsuario +"!")*/
 
//Exercício 2

//Array
/*const lista = ["Pizza", "Hamburguer", "Lasanha", "Pastel", "Coxinha"]

//mensagem 
console.log(lista)
console.log("Essas são as minhas comidas preferidas ")
console.log(lista[0])
console.log(lista[1])
console.log(lista[2])
console.log(lista[3])
console.log(lista[4])
/n

//dados 
let comidaUsuario
comidaUsuario = prompt("Digite sua comida preferida")

//mudando lista
lista[1] = comidaUsuario

 // mensagem 
console.log(lista)*/

//Exercício 3
//Array
/*const listaDeTarefas = []

//dados

tarefa1 = prompt("Digite uma tarefa que voce precisa fazer hoje")
tarefa2 = prompt("Digite mais uma")
tarefa3 = prompt ("Agora outra")

//colocando dados na array

listaDeTarefas .push(tarefa1)
listaDeTarefas .push(tarefa2)
listaDeTarefas .push(tarefa3)

//mensagem

console.log(listaDeTarefas)

//removendo um item 
remover = prompt("Digite o indice da tarefa para remove-la")
listaDeTarefas.splice(remover,1)
console.log(listaDeTarefas)*/

//Desafio 1
/*const  texto = prompt("Digite uma frase")

const array = texto.split(" ");

console.log(array)*/
//desafio 2 

const lista = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

const elementIndex = lista.findIndex(checkNumber)

function checkNumber(elementIndex){
    return elementIndex === "Abacaxi"
}
console.log(elementIndex)
console.log(lista.length)

/*let condiçao1 = true
if(condiçao1){console.log('entrei no if 1')}
let condiçao2 = false
if(condiçao2){console.log('entrei no if 2')}*/
let numero1
let numeor2
numero1 = prompt("numero")
al = prompt("numero2")
if(numero1 = al){
    return console.log(true)
}

