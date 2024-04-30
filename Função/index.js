/*function parimp(n) {
    if(n%2==0){
        return 'par'
    }else{
        return 'ímpar'
    }

}
let res = parimp(3)
console.log(res)*/
/*function criarMensagem(nome, idade, cidade, profissao) {
    return `Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e ainda sou ${profissao}.`;
}

// Exemplo de uso da função
const mensagem = criarMensagem("Romoaldo", 19, "São leopoldo", "Estudante");
console.log(mensagem);*/
/*let cidade1 = prompt("Digite sua cidade")
let idade = prompt("Digite sua idade")
let array = [cidade1, idade]
let listaDeAbrigos = ["Rua da paz", "Rua do amor"]

function podeEntrar(cidade, idade) {
    if(cidade == "São leopoldo" && idade > 18){
        return `Pode entrar nossos abrigos são ${listaDeAbrigos} `
    }else{
        return 'Não pode entrar'
    }
}
let res = podeEntrar(array[0],array[1])
alert(res)*/
//Exercício 4
/*function novoArray(array2){
   let  array = []
   let tamanho = array.lenght
   array.push((array2[0]/2))
   array.push((array2[(array2.length - 1)]/2))
   return array
} 
let array = [2,3,4,5,6,7,8]
let novaArray = []

novaArray = novoArray(array)
 console.log(novaArray)*/

//Exercício 1 E
//A

//B
/*function informaçoes(nome, idade, cidade, profissao){

    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`

}
let nome = prompt("Digite seu nome")
let idade = prompt("Digite sua idade")
let cidade = prompt("Digite sua cidade")
let profissao =  prompt("Digite sua profissão")
const mensagem = informaçoes(nome, idade, cidade, profissao)
console.log(mensagem)
 */
//2
//A
function soma(num1, num2){
    return num1 + num2
} 
let res = soma(2,2)
console.log(res)

//B
function boolOuNao(primeiroNumero, segundoNumero){
    if(primeiroNumero >= segundoNumero){
        return true
    }else {
        return false
    }
}
let resultadoBoolean = boolOuNao(1,2)
console.log(resultadoBoolean)
//c
function parOuNao(numeroPrimeiro){
    if(  numeroPrimeiro%2==0){
        return true
    }else{
        return false
    }
}
let result = parOuNao(257)
console.log(result)
//d
function mensagem(msg){
    return msg.length

}
let mens = mensagem("oi estou bem")
console.log(mens)