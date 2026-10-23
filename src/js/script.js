// const nomeVinho = prompt("Digite o nome do vinho:");
// const tipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé):");
// const safraVinho = Number(prompt("Digite a safra do vinho (ano):"));
// const quantidadeEstoque = Number(prompt("Digite a quantidade em estoque:"));

let vinhos_cadastrados = 4;
let valor_total_estoque = 8000;
let vinhos_listados = [{ nomevinho: "Vinho A", preco: "R$2000" }, { nomevinho: "Vinho B", preco: "R$2000" }, { nomevinho: "Vinho C", preco: "R$2000" }, { nomevinho: "Vinho D", preco: "R$2000" }];

function cadastro_vinho() {
    let nome_vinho = prompt(`Nome do Vinho: `);
    let tipo_vinho = prompt(`Tipo do Vinho: `);
    let quantidade_vinho = prompt(`Quantidade: `);
    let preco_vinho = prompt(`Preço do Vinho: R$ `);
    vinhos_listados.push({ nomevinho: nome_vinho, preco: _vinho })
    vinhos_cadastrdos += 1;
    valor_total_estoque = valor_total_estoque + preco_vinho;
};

function listar_vinhos() {
    let print_estoque = "Vinhos no Estoque:\n\n";
    for (let i = 0; i < vinhos_listados.length; i++) {
        print_estoque += `- ${vinhos_listados[i]["nomevinho"]} - R$ ${vinhos_listados[i]["preco"]}\n`;
    }
    alert(print_estoque);
}

let acao
do {
    acao = prompt("Bem vindo ao Sistema de Vinhos GPT Intelligency\n Escolha uma Ação:\n 1 - Listar Vinhos\n2 - Cadastrar Vinhos\n 5 - Sair");

    switch (acao) {
        case "1":
            listar_vinhos();
            break;
        case "2":
            cadastro_vinho();
            break;
        case "5":
            alert("Saindo do sistema...");
            break;
        default:
            alert("Opção inválida!");
            break;
    }
} while (acao != "5");

