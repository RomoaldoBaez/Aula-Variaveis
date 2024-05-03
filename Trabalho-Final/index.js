// Array para armazenar os abrigos
let abrigos = [];

// Função para cadastrar um novo abrigo
function cadastrarAbrigo() {
    // Pedir informações ao usuário
    let nome = prompt("Digite o nome do abrigo:");
    let endereco = prompt("Digite o endereço do abrigo:");
    let telefone = prompt("Digite o telefone do abrigo:");
    let capacidade = parseInt(prompt("Digite a capacidade de lotação do abrigo:"));

    // Criar um objeto com as informações do abrigo
    let novoAbrigo = {
        nome: nome,
        endereco: endereco,
        telefone: telefone,
        capacidade: capacidade
    };

    // Adicionar o objeto ao array de abrigos
    abrigos.push(novoAbrigo);

    // Exibir mensagem de sucesso
    console.log("Abrigo cadastrado com sucesso!");
    console.log(abrigos)
}
 


// Função para listar todos os abrigos cadastrados
function listarAbrigos() {
    // Verificar se existem abrigos cadastrados
    if (abrigos.length === 0) {
        console.log("Nenhum abrigo cadastrado.");
        return;
    }

    // Cabeçalho da listagem
    console.log("--------------------");
    console.log("LISTAGEM DE ABRIGOS:");
    console.log("--------------------");
    console.log("CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE |");

    // Loop para mostrar cada abrigo
    for (let i = 0; i < abrigos.length; i++) {
        let abrigo = abrigos[i];
        let codigo = pad(i + 1, 3); // Função para formatar o código com 3 dígitos
        let nome = padString(abrigo.nome, 20); // Função para formatar o nome com 20 caracteres
        let endereco = padString(abrigo.endereco, 35); // Função para formatar o endereço com 35 caracteres
        let telefone = padString(abrigo.telefone, 14); // Função para formatar o telefone com 14 caracteres
        let capacidade = pad(abrigo.capacidade, 10); // Função para formatar a capacidade com 10 caracteres
        alert(`${codigo}  | ${nome} | ${endereco} | ${telefone} | ${capacidade} |`);
    }
}
// Função auxiliar para formatar números com zero à esquerda
function pad(num, size) {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;}
    

    // Função auxiliar para formatar strings com espaços à direita
function padString(str, size) {
    let s = str.substring(0, size);
    while (s.length < size) s += " ";
    return s;}
cadastrarAbrigo();
listarAbrigos();?
function procurarAbrigo() {
    // Pedir a cidade ao usuário
    let cidade = prompt("Digite o nome da sua cidade para procurar um abrigo temporário:");

    // Filtrar os abrigos pela cidade
    let abrigosNaCidade = abrigos.filter(abrigo => abrigo.cidade.toLowerCase() === cidade.toLowerCase());

    // Verificar se há abrigos na cidade informada
    if (abrigosNaCidade.length === 0) {
        console.log(`Nenhum abrigo temporário encontrado em ${cidade}.`);
        return;
    }