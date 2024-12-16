import { cadastrarVoo, buscarVoos } from './Voo';
import * as fs from 'fs';
import { Voo } from '../interfaces/Voo';
jest.mock('fs');

describe('Metodo teste', () => {
    it('Teste', () => {
        expect(true).toBe(true);
    });
});
jest.mock('fs');

describe('Voo Service', () => {
    const mockFilePath = '/Users/guilhermehenrique/Documents/faculdade/primeiro-periodo/fundamentos/sistemaVoos/src/dados/voos.json';

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('cadastrarVoo', () => {
        it('should create a new file if it does not exist', () => {
            (fs.existsSync as jest.Mock).mockReturnValue(false);
            (fs.readFileSync as jest.Mock).mockReturnValue('[]');
            const novoVoo: Voo = {
                codigoVoo: '123', destino: 'SP', origem: 'RJ', data: '2023-10-10',
                hora: '',
                codigoAviao: '',
                codigoPiloto: '',
                codigoCopiloto: '',
                codigoComissario: '',
                status: '',
                tarifa: 0
            };

            cadastrarVoo(novoVoo);

            expect(fs.writeFileSync).toHaveBeenCalledWith(mockFilePath, JSON.stringify([novoVoo], null, 2));
        });
    });
});
