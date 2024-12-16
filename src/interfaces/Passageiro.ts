import { UUID } from "crypto";
import { v4 as uuidv4 } from 'uuid';

export interface Passageiro {
    codigo: string;
    nome: string;
    endereco: string;
    telefone: string;
    fidelidade: boolean;
    pontosFidelidade: number;
}