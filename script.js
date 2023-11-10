// Desafio 01 - Estrutura de Dados, Funções e Condições
//Nome: Pâmela Wallesca Fernandes Alves

//questão 01
var dia = true
if (dia) {
    console.log("está claro!");
} else {
    console.log("está de noite!");
}

//questão 02
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

//questão 03
function exibeMensagem() {
    console.log("Hello World!");
}
exibeMensagem();

//questão 04
function exibeNome(nome) {
    console.log(nome);
}
exibeNome("Pâmela Fernandes");

//questão 05
function exibeInformações(nome, idade, estiloMusicalPreferido) {
    console.log("Nome: " + nome);
    console.log("Idade: " + idade);
    console.log("Estilo musical preferido: " + estiloMusicalPreferido);
}
exibeInformações("Pâmela", 17, "Rock");

//questão 06
function exibeFilmeEMusica(filme, musica) {
    console.log("Filme: " + filme);
    console.log("Música: " + musica);
}
exibeFilmeEMusica("Interestelar", "Ideologia - Cazuza");

//questao 07
function triploDoNumero(numero) {
    resultado = numero * 3;
    console.log(resultado);
}
triploDoNumero(5);

//questao 08
function verificarTrueOuFalse(valor) {
    if (valor === true) {
        console.log("A variável é true.")
    } else {
        console.log("A variável é false.")
    }
}
verificarTrueOuFalse(false);

//questao 09
var frutas = ["banana", "maçã", "kiwi", "uva", "morango"];
console.log(frutas);

//questao 10
frutas.unshift("abacaxi");
console.log(frutas);

//questao 11
frutas.pop();
console.log(frutas);

//questao 12
frutas.push("amora", "cereja");
console.log(frutas);

//questao 13
frutas.shift();
console.log(frutas);

//questao 14
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
numbers.sort();
console.log(numbers);

//questao 15
let sobreMim = {
    nome: "Pâmela",
    idade: 17,
    cidade: "Catolé do Rocha"
};
console.log(sobreMim);

//questao 16
sobreMim.genero = "Feminino";
console.log(sobreMim);

//questao 17
delete sobreMim.cidade;

//questao 18
console.log(sobreMim);

//questao 19
let cadastro = [
    {
        nome: "Pâmela",
        idade: 17,
        telefone: 111111111,
        amigos: ["Mari", "Vitória", "Letícia", "Duda", "Gabi"]
    },

    {
        nome: "Pâmela",
        idade: 17,
        telefone: 111111111,
        amigos: ["Mari", "Vitória", "Letícia", "Duda", "Gabi"]
    },

    {
        nome: "Pâmela",
        idade: 17,
        telefone: 111111111,
        amigos: ["Mari", "Vitória", "Letícia", "Duda", "Gabi"]
    },

    {
        nome: "Pâmela",
        idade: 17,
        telefone: 111111111,
        amigos: ["Mari", "Vitória", "Letícia", "Duda", "Gabi"]
    },

    {
        nome: "Pâmela",
        idade: 17,
        telefone: 111111111,
        amigos: ["Mari", "Vitória", "Letícia", "Duda", "Gabi"]
    },
];

console.log(cadastro);

//questao 20
console.log(cadastro[0].amigos[0]);
console.log(cadastro[1].amigos[1]);
console.log(cadastro[2].amigos[2]);
console.log(cadastro[3].amigos[3]);
console.log(cadastro[4].amigos[4]);