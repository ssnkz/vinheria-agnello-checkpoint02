// const nomeVinho = prompt("Digite o nome do vinho:");
// const tipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé):");
// const safraVinho = Number(prompt("Digite a safra do vinho (ano):"));
// const quantidadeEstoque = Number(prompt("Digite a quantidade em estoque:"));

let vinhos_cadastrados = 4;
let valor_total_estoque = 8000;
let vinhos_listados = [{ nomevinho: "Vinho A", preco: "R$2000", estoque: 3, idade: 50 }, { nomevinho: "Vinho B", preco: "R$2000", estoque: 3, idade: 20 }, { nomevinho: "Vinho C", preco: "R$2000", estoque: 3, idade: 10 }, { nomevinho: "Vinho D", preco: "R$2000", estoque: 3, idade: 15 }];

function cadastro_vinho() {
    let nome_vinho = prompt(`Nome do Vinho: `);
    let quantidade_vinho = parseInt(prompt(`Quantidade: `));
    let preco_vinho = parseInt(prompt(`Preço do Vinho: R$ `));
    let idade_vinho = parseInt(prompt(`Informe a Idade do Vinho: `));
    vinhos_listados.push({ nomevinho: nome_vinho, preco: "R$" + preco_vinho, estoque: quantidade_vinho, idade: idade_vinho });
    vinhos_cadastrados += quantidade_vinho;
    valor_total_estoque = valor_total_estoque + preco_vinho;
    alert(`Vinho ${nome_vinho} Cadastrado com Sucesso!`);
    console.log(`Vinho ${nome_vinho} Cadastrado com Sucesso!`)
}

function vender_vinho() {
    let mensagem = (`Selecione o Tipo do Vinho que deseja Vender\n\n`)
    for (let i = 0; i < vinhos_listados.length; i++) {
        mensagem += `- ${vinhos_listados[i]["nomevinho"]}\n`;
    }
    alert(mensagem);

    let vinhoselecionado
    let vinho_encontrado
    do {
        mensagem_erro = "Selecione um vinho da lista abaixo:\n\n";
        for (let i = 0; i < vinhos_listados.length; i++) {
            mensagem_erro += `- ${vinhos_listados[i]["nomevinho"]}\n`;
        }
        vinhoselecionado = prompt(mensagem_erro);
        vinho_encontrado = vinhos_listados.find(vinho => vinho.nomevinho === vinhoselecionado);
        if (!vinho_encontrado) {
            alert("Nome do vinho não está cadastrado! Olhe novamente a tabela.");
        }

    } while (!vinho_encontrado);
    quantidade_vendida = parseInt(prompt("Informe a Quantidade que será Vendida: "));
    if (quantidade_vendida > vinho_encontrado.estoque) {
        alert(`Erro! Estoque insuficiente. Temos apenas ${vinho_encontrado.estoque} unidades.`);
        return;
    }

    let preco_numerico = parseFloat(vinho_encontrado.preco.replace("R$", ""));
    let valor_total = quantidade_vendida * preco_numerico;

    alert(`Nota de Receita da Venda\n
    - Nome Vinho: ${vinhoselecionado}
    - Quantidade que será vendida: ${quantidade_vendida}
    - Valor Total: ${valor_total}`);
    confirmacao = prompt("Tem certeza que deseja realizar essa operação? ([s]im ou [n]ao");
    if (confirmacao.toLowerCase() == "s") {
        vinho_encontrado.estoque -= quantidade_vendida;
        alert(`Venda Confirmada!\n\n` +
            `Nota de Receita da Venda\n` +
            `- Nome Vinho: ${vinho_encontrado.nomevinho}\n` +
            `- Quantidade vendida: ${quantidade_vendida}\n` +
            `- Valor Total: R$ ${valor_total.toFixed(2)}\n` +
            `- Estoque Atual do Vinho: ${vinho_encontrado.estoque}`);
    } else if (confirmacao.toLowerCase() == "n") {
        alert(`Operação Cancelada!`);
    }

}

function listar_vinhos() {
    let quantidade_total = 0;
    let print_estoque = "Vinhos no Estoque:\n\n";
    for (let i = 0; i < vinhos_listados.length; i++) {
        print_estoque += `- ${vinhos_listados[i]["nomevinho"]} - R$ ${vinhos_listados[i]["preco"]} - ${vinhos_listados[i]["estoque"]}\n`;
        quantidade_total += vinhos_listados[i].estoque
    }
    if (quantidade_total < 5) {
        print_estoque += `\nClassificação do Estoque: Estoque Baixo`;
    } else if (quantidade_total > 5 && quantidade_total < 8) {
        print_estoque += `\nClassificação do Estoque: Estoque Médio`;
    } else if (quantidade_total > 8) {
        print_estoque += `\nClassificação do Estoque: Estoque Grande`;
    }
    alert(print_estoque);
    console.log(print_estoque);
}

function verificar_saldo() {
    let valor_somado_atual = 0;
    for (let i = 0; i < vinhos_listados.length; i++) {
        valor_corrigido = parseInt(vinhos_listados[i].preco.replace("R$", ""));
        quantidade_vinho = parseInt(vinhos_listados[i].estoque);

        valor_multiplicado = quantidade_vinho * valor_corrigido;
        valor_somado_atual += valor_multiplicado;
    }
    alert(`O saldo atual do sistema é ${valor_somado_atual}`);
    console.log(`O saldo atual do sistema é ${valor_somado_atual}`);
}

function verificar_class_vinhos() {
    let print_classificacoes = "";
    for (let i = 0; i < vinhos_listados.length; i++) {
        let classificacao_vinho = "";
        if (vinhos_listados[i].idade <= 10) {
            classificacao_vinho = "Jovem";
        } else if (vinhos_listados[i].idade > 10 && vinhos_listados[i].idade <= 25) {
            classificacao_vinho = "Amadurecido";
        } else if (vinhos_listados[i].idade > 25) {
            classificacao_vinho = "Antigo";
        }
        print_classificacoes += `- ${vinhos_listados[i].nomevinho} - Classificação: ${classificacao_vinho}\n`;
    }
    alert(print_classificacoes);
    console.log(print_classificacoes);
}

let acao;
do {
    acao = prompt("Bem vindo ao Sistema de Vinhos GPT Intelligency\n Escolha uma Ação:\n 1 - Listar Vinhos\n2 - Cadastrar Vinhos\n3 - Vender Vinhos\n4 - Consultar Saldo\n 5 - Verificar Classificação Vinhos\n 6 - Sair");

    switch (acao) {
        case "1":
            listar_vinhos();
            break;
        case "2":
            cadastro_vinho();
            break;
        case "3":
            vender_vinho();
            break;
        case "4":
            verificar_saldo();
            break;
        case "5":
            verificar_class_vinhos();
            break;
        case "6":
            alert("Saindo do sistema...");
            break;
        default:
            alert("Opção inválida!");
            break;
    }
} while (acao != "6");

