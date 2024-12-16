import { cadastrarPassageiro, buscarPassageiros } from './Passageiro';
import * as fs from 'fs';
import { Passageiro } from '../interfaces/Passageiro';

jest.mock('fs');

describe('Metodo teste', () => {
    it('Teste', () => {
        expect(true).toBe(true);
    });
});

describe('Passageiro Service', () => {
    const mockFilePath = '/Users/guilhermehenrique/Documents/faculdade/primeiro-periodo/fundamentos/sistemaVoos/src/dados/passageiros.json';

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('cadastrarPassageiro', () => {
        it('should create a new file if it does not exist', () => {
            (fs.existsSync as jest.Mock).mockReturnValue(false);
            (fs.readFileSync as jest.Mock).mockReturnValue('[]');
            const novoPassageiro: Passageiro = {
                codigo: '123',
                nome: 'teste',
                endereco: 'rua teste',
                telefone: '31997123130',
                fidelidade: true,
                pontosFidelidade: 0,
            };

            cadastrarPassageiro(novoPassageiro);

            expect(fs.writeFileSync).toHaveBeenCalledWith(mockFilePath, JSON.stringify([novoPassageiro], null, 2));
        });
    });
});