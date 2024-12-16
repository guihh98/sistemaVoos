import * as readlineSync from 'readline-sync';
import { cadastrarPassageiro } from './src/services/Passageiro';
import { Passageiro } from './src/interfaces/Passageiro';
import { v4 as uuidv4 } from 'uuid';
import { Tripulacao } from './src/interfaces/Tripulacao';
import { cadastrarTripulante } from './src/services/Tripulacao';
import { cadastrarVoo } from './src/services/Voo';
import { Voo } from './src/interfaces/Voo';

const main = (): void => {
    let sair = false;

    while (!sair) {
        montarMenu();
        const opcao = obterInputUsuario();

        switch (opcao) {
            case '1':
                cadastroDePassageiro();
                break;
            case '2':
                cadastroDeTripulacao()
                break;
            case '3':
                cadastroDeVoo();
                break;
            case '4':
                console.log("Nao foi necessario imoleentar pois fiz o trabalho sozinho e nao faco AEDS");
                break;
            case '5':
                console.log("Nao foi necessario imoleentar pois fiz o trabalho sozinho e nao faco AEDS");
                break;
            case '6':
                console.log("Nao foi necessario imoleentar pois fiz o trabalho sozinho e nao faco AEDS");
                break;
            case '7':
                console.log("Nao foi necessario imoleentar pois fiz o trabalho sozinho e nao faco AEDS");
                break;
            case 'sair':
                sair = true;
                console.log("Saindo do sistema...");
                break;
            default:
                console.log("Opção inválida");
                break;
        }
    }
}

const montarMenu = (): void => {
    console.log("1. Cadastro de Passageiro");
    console.log("2. Cadastro de Tripulação");
    console.log("3. Cadastro de Voo");
    console.log("4. Cadastro de Assento");
    console.log("5. Reserva");
    console.log("6. Baixa em Reserva");
    console.log("7. Pesquisa");
    console.log("Selecione uma opção:");
};

const obterInputUsuario = (): string => {
    return readlineSync.question('Digite o número da opção desejada: ');
};

const cadastroDePassageiro = (): void => {
    try {
        const codigo = uuidv4();
        const nome = readlineSync.question('Digite o nome do passageiro: ');
        const endereco = readlineSync.question('Digite o endereço do passageiro: ');
        const telefone = readlineSync.question('Digite o telefone do passageiro: ');
        const fidelidade = false;
        const pontosFidelidade = 0;

        const novoPassageiro: Passageiro = {
            codigo,
            nome,
            endereco,
            telefone,
            fidelidade,
            pontosFidelidade
        };

        cadastrarPassageiro(novoPassageiro);
        console.log("Passageiro cadastrado com sucesso!");
    } catch (error) {
        console.error("Erro ao cadastrar passageiro:", error);
    }
};

const cadastroDeTripulacao = (): void => {
    try {
        const codigo = uuidv4();
        const nome = readlineSync.question('Digite o nome do tripulante: ');
        const telefone = readlineSync.question('Digite o telefone do tripulante: ');
        const cargos = ['piloto', 'copiloto', 'comissario'];
        const index = readlineSync.keyInSelect(cargos, 'Escolha o cargo do tripulante:');
        if (index === -1) throw new Error('Operação cancelada pelo usuário.');
        const cargo = cargos[index] as 'piloto' | 'copiloto' | 'comissario';

        const novoTripulante: Tripulacao = {
            codigo,
            nome,
            telefone,
            cargo
        };

        cadastrarTripulante(novoTripulante);
        console.log("Tripulante cadastrado com sucesso!");
    } catch (error) {
        console.error("Erro ao cadastrar tripulante:", error);
    }
};

const cadastroDeVoo = (): void => {
    try {
        const codigoVoo = uuidv4();
        const data = readlineSync.question('Digite a data do voo (DD/MM/YYYY): ');
        const hora = readlineSync.question('Digite a hora do voo (HH:MM): ');
        const origem = readlineSync.question('Digite a origem do voo: ');
        const destino = readlineSync.question('Digite o destino do voo: ');
        const codigoAviao = readlineSync.question('Digite o código do avião: ');
        const codigoPiloto = readlineSync.question('Digite o código do piloto: ');
        const codigoCopiloto = readlineSync.question('Digite o código do copiloto: ');
        const codigoComissario = readlineSync.question('Digite o código do comissário: ');
        const status = readlineSync.keyInSelect(['ativo', 'inativo'], 'Escolha o status do voo:') === 0 ? 'ativo' : 'inativo';
        const tarifa = parseFloat(readlineSync.question('Digite a tarifa do voo: '));

        const novoVoo: Voo = {
            codigoVoo,
            data,
            hora,
            origem,
            destino,
            codigoAviao,
            codigoPiloto,
            codigoCopiloto,
            codigoComissario,
            status,
            tarifa
        };

        cadastrarVoo(novoVoo);
        console.log("Voo cadastrado com sucesso!");
    } catch (error) {
        console.error("Erro ao cadastrar voo:", error);
    }
};

const cadastroDeAssento = (): string => {
    return "Cadastro de Assento selecionado";
};

const reserva = (): string => {
    return "Reserva selecionada";
};

const baixaEmReserva = (): string => {
    return "Baixa em Reserva selecionada";
};

const pesquisa = (): string => {
    return "Pesquisa selecionada";
};

main();