class Abrigo {
    constructor(nome, endereco, telefone, capacidade, cidade) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.capacidade = capacidade;
        this.cidade = cidade;
    }

    toString() {
        return `${this.nome} | ${this.endereco} | ${this.telefone} | ${this.capacidade} | ${this.cidade}`;
    }
}

const abrigos = [];

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
