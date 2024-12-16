export interface Voo {
    codigoVoo: string;
    data: string;
    hora: string;
    origem: string;
    destino: string;
    codigoAviao: string;
    codigoPiloto: string;
    codigoCopiloto: string;
    codigoComissario: string;
    status: 'ativo' | 'inativo' | string;
    tarifa: number;
}