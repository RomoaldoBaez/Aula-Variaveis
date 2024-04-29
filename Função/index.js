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
let cidade1 = prompt("Digite sua cidade")
let idade = prompt("Digite sua idade")
let array = [cidade1, idade]
let listaDeAbrigos = ["abrigo1", "Abrigo2"]

function podeEntrar(cidade, idade) {
    if(cidade == "São leopoldo" && idade > 18){
        return `Pode entrar nossos abrigos são ${listaDeAbrigos} `
    }else{
        return 'Não pode entrar'
    }
}
let res = podeEntrar(array[0],array[1])
alert(res)
