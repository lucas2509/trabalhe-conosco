import { validarCPFCNPJ } from '../src/helpers/ValidadorCpfCNPJ';

describe('Teste do validor de CPF CNPJ', () => {
    test('Deve verificar CPF como True', () => {
      const cpf = "23161335090"
      expect(validarCPFCNPJ(cpf));
    });

    test('Deve verificar CNPJ como True', () => {
        const cnpj = "80908401000183"
        expect(validarCPFCNPJ(cnpj));
      });

    test('Deve verficar um numero que nao e CPF nem CNPJ', () => {
        const cnpj = "809084010001"
        expect(!validarCPFCNPJ(cnpj));
      });

});