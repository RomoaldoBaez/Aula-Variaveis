//Exercício 1------------------------------------------------

//dados
/*let numero1 = prompt("Digite um numero")
let = segundoNumero =prompt("Mais um numero")

//if
if(numero1 == segundoNumero){
    console.log(true)
    alert(true)
}*/
//Exercício 2------------------------------------------------

//dados
/*let primeiroNumero = prompt("Digite um numero")
let  segundoNumero = prompt("Mais um numero")

//if 
if(primeiroNumero == segundoNumero){
    console.log("Os numeros são iguais")
}else if(primeiroNumero !== segundoNumero){
    console.log("Os números sao diferentes")
}
*/

//Exercício 3 ----------------------------------------------
/*let primeiroNumero = prompt("Digite um numero")
let = segundoNumero =prompt("Mais um numero") 

if(primeiroNumero > segundoNumero){
    console.log("O primeiro número é maior que o segundo")
}else if(primeiroNumero < segundoNumero){
    console.log("O primeiro número é menor que o segundo")
}else if(primeiroNumero == segundoNumero){
    console.log("Os numero são iguais :)")
}*/

//Exercício 4 -----------------------------------------------------------------------------------
/*let pokemons = prompt("Escolha um pokemon dentre estes: Bulbasauro, Charmander, Squirtle ")
switch (pokemons){
    case 'Bulbasauro':
        alert("Voce escolheu o Bulbasauro (Planta e Veneno)") 
        break 
    case 'Charmander':
        alert("Voce escolheu o Charmander (Fogo)")
        break 
    case 'Squirtle':
        alert("Voce escolheu Squirtle (Água)")
        break
}*/
//Exercício 5 ------------------------------------------------------------------------------------
//dados
/*let concluiuEm = prompt("Voce concluiu o ensino médio")
let idade = prompt("Voce tem mais de 18 anos")
let cursandoOutraFacul = prompt("Voce esta cursando outra faculdade")

//if
if((concluiuEm == "sim" )&&(idade == "sim")&&(cursandoOutraFacul == "não")){
   alert("Voce pode cursar em nossa faculdade")
}else if((concluiuEm == "não")&&(idade == "não")&&(cursandoOutraFacul == "sim")){
   alert("Voce não pode cursar em nossa faculadade")
}else if((concluiuEm == "não")&&(idade == "sim")&&(cursandoOutraFacul == "não")){
   alert("Para cursar aqui voce precisa concluir o ensino medio")
}
*/
//Exercícios de escrita de código 1 ----------------------------------------------------------------
//dados
/*let idade = Number(prompt("Digite sua idade"))

//if 
if(idade > 18 ){
    console.log("Voce pode dirigir :)")
    alert("Voce pode dirigir :)")
}else if(idade < 18 ){
    console.log("Voce não pode dirigir ")
    alert("Voce não pode dirigir ")
}*/

//Exercício 2 
//dados
/*let turno = prompt("Digite seu truno como M para (matutino),  V (Vespertino), N (Noturno)") 

//if 
if(turno === "M"){
console.log("Bom Dia")
alert("Bom Dia")
}else if(turno === "V"){
    console.log("Boa Tarde")
    alert("Boa Tarde")
}else if(turno === "N"){
    console.log("Boa Noite")
    alert("Boa Noite")
}*/
//dados
let filme = prompt("Digite o genero do filme")
let preço = Number(prompt("preço"))
filme = filme.toUpperCase()

//if
if ((filme == "FANTASIA") && (preço <= 15)){
    alert("Bom Filme!")
}else {
    alert("Escolha outro filme!!!")
}
*/
//Exercício 3
/*let turno = prompt("Digite seu truno como M para (matutino),  V (Vespertino), N (Noturno)")

//switch case
switch(turno) {
    case 'V' :
       alert("Bom Dia")
       break 
    case 'M':
       alert("Boa Tarde")
       break
    case 'N':
       alert("Boa Noite")
       default:
        alert("Nenhum dos anteriores")
}*/
//dados
let filme = prompt("Digite o genero do filme")
let preço = number(prompt("preço"))

//if
if(filme === "fantasia"){
    console.log("Filme de Fantasia")
}else if(preço === 15){
    console.log("Preço Bom")
}










