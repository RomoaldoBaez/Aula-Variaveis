//let nome = prompt("Qual é seu nome?")
//alert(`seu nome é ${nome}` )

//Exercícios de escrita de código 1 
//let nome 
//let idade  
//console.log(typeof nome )
//console.log(typeof idade ) 
//undefined por nao ter nenhum valor atribuido 
//let nome = prompt ("Qual é seu nome?")
//alert(`seu nome é ${nome}`)
//let idade = prompt ("qual sua idade")
//alert(`sua idade é ${idade}`)

//Exercício 2
//alert()
//Recebeu as variáveis
let nome = prompt("Digite seu nome")
let idade =prompt("Digite sua idade")
//MENSAGEM: Digite as horas que voçe trabalha por dia:
let horasTrabalho = prompt("Digite as horas que voçe trabalha por dia") 
let salarioDia = prompt("Digite o seu salário diário") 
//Verificando as variáveis
console.log(typeof nome)
console.log(typeof horasTrabalho)
console.log(typeof salarioDia)
//Convertendo o que é necessário 
let horasTrabNumber = Number(horasTrabalho)
let salDiaNumber = Number(salarioDia)
//processando valores
let valHoraNumber = horasTrabNumber/salDiaNumber
//conversão pra não dar erro de NULL
let valorHora = String(valHoraNumber)
const mensagem = "seu valor e " + valorHora + "!!!"
//Verificando variáveis
console.log(typeof valorHora)
console.log(typeof mensagem)
console.log(mensagem)
//Saída de valores para Front End
alert(mensagem)
console.log("asasa")