import * as fs from 'fs';
import * as path from 'path';
import { Voo } from '../interfaces/Voo';

const filePath = path.join(__dirname, '../dados/voos.json');

function verificarArquivo(): boolean {
    return fs.existsSync(filePath);
}

function criarArquivo(): void {
    if (!verificarArquivo()) {
        fs.writeFileSync(filePath, JSON.stringify([]));
    }
}

function cadastrarVoo(novoVoo: Voo): void {
    criarArquivo();
    const dados = fs.readFileSync(filePath, 'utf-8');
    const voos: Voo[] = dados ? JSON.parse(dados) : [];

    const vooExistente = voos.find(v => v.codigoVoo === novoVoo.codigoVoo);
    if (vooExistente) {
        console.log('Voo já cadastrado.');
        return;
    }

    voos.push(novoVoo);
    fs.writeFileSync(filePath, JSON.stringify(voos, null, 2));
}

function buscarVoos(): Voo[] {
    criarArquivo();
    const dados = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(dados);
}

export { cadastrarVoo, buscarVoos };