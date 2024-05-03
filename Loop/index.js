class Abrigo {
    constructor(nome, endereco, telefone, capacidade, cidade) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.capacidade = capacidade;
        this.cidade = cidade;
    }

<<<<<<< HEAD
    toString() {
        return `${this.nome} | ${this.endereco} | ${this.telefone} | ${this.capacidade} | ${this.cidade}`;
    }
}

const abrigos = [];
=======
//loop
for(let i = 0; i < numPet; i++ ){
    let nomePet = prompt("Digite o nome do seu pet:");
    nomesDosPets.push(nomePet);

}

//imprimir array 
console.log("Nomes dos bichinhos de estimação:");
console.log(nomesDosPets)*/

//Exercício 2
/*function imprimirValores(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

// 
const arrayOriginal = [1, 2, 3, 4, 5];
imprimirValores(arrayOriginal);*/
>>>>>>> 4e9f789e435969cb847435aa53d072b9cbacc7c2

function cadastrarAbrigo() {
    console.log("----- Cadastro de Abrigo -----");
    const nome = prompt("Nome do abrigo: ");
    const endereco = prompt("Endereço do abrigo: ");
    const telefone = prompt("Telefone do abrigo: ");
    const capacidade = parseInt(prompt("Capacidade de lotação do abrigo: "));
    const cidade = prompt("Cidade do abrigo: ");

    const abrigo = new Abrigo(nome, endereco, telefone, capacidade, cidade);
    abrigos.push(abrigo);
    console.log("Abrigo cadastrado com sucesso!\n");
}

function menu() {
    while (true) {
        console.log("===== ABRIGOS TEMPORÁRIOS =====");
        console.log("1. Cadastrar abrigo");
        console.log("2. Listar abrigos");
        console.log("3. Procurar abrigo");
        console.log("4. Sair");
        const opcao = prompt("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                cadastrarAbrigo();
                break;
            case "2":
                listarAbrigos();
                break;
            case "3":
                procurarAbrigo();
                break;
            case "4":
                console.log("Saindo do programa...");
                return;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

menu();
