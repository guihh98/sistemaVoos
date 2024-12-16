import * as fs from 'fs';
import * as path from 'path';
import { Tripulacao } from '../interfaces/Tripulacao';

const filePath = path.join(__dirname, '../dados/tripulacao.json');

function verificarArquivo(): boolean {
    return fs.existsSync(filePath);
}

function criarArquivo(): void {
    if (!verificarArquivo()) {
        fs.writeFileSync(filePath, JSON.stringify([]));
    }
}

function cadastrarTripulante(novoTripulante: Tripulacao): void {
    criarArquivo();
    const dados = fs.readFileSync(filePath, 'utf-8');
    const tripulantes: Tripulacao[] = dados ? JSON.parse(dados) : [];

    const tripulanteExistente = tripulantes.find(t => t.codigo === novoTripulante.codigo);
    if (tripulanteExistente) {
        console.log('Tripulante já cadastrado.');
        return;
    }

    tripulantes.push(novoTripulante);
    fs.writeFileSync(filePath, JSON.stringify(tripulantes, null, 2));
}

function buscarTripulantes(): Tripulacao[] {
    criarArquivo();
    const dados = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(dados);
}

export { cadastrarTripulante, buscarTripulantes };