export interface Tripulacao {
    codigo: string;
    nome: string;
    telefone: string;
    cargo: 'piloto' | 'copiloto' | 'comissario';
}