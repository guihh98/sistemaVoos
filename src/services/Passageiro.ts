import * as fs from 'fs';
import * as path from 'path';
import { Passageiro } from '../interfaces/Passageiro';

const filePath = path.join(__dirname, '../dados/passageiros.json');

function verificarArquivo(): boolean {
    return fs.existsSync(filePath);
}

function criarArquivo(): void {
    if (!verificarArquivo()) {
        fs.writeFileSync(filePath, JSON.stringify([]));
    }
}

function cadastrarPassageiro(novoPassageiro: Passageiro): void {
    criarArquivo();
    const dados = fs.readFileSync(filePath, 'utf-8');
    const passageiros: Passageiro[] = dados ? JSON.parse(dados) : [];

    const passageiroExistente = passageiros.find(p => p.codigo === novoPassageiro.codigo);
    if (passageiroExistente) {
        console.log('Passageiro já cadastrado.');
    }

    passageiros.push(novoPassageiro);
    fs.writeFileSync(filePath, JSON.stringify(passageiros, null, 2));
}

function buscarPassageiros(): Passageiro[] {
    criarArquivo();
    const dados = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(dados);
}

export { cadastrarPassageiro, buscarPassageiros };