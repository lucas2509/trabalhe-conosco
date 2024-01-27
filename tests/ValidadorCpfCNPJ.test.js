"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ValidadorCpfCNPJ_1 = require("../src/helpers/ValidadorCpfCNPJ");
describe('Teste do validor de CPF CNPJ', () => {
    test('Deve verificar CPF como True', () => {
        const cpf = "23161335090";
        expect((0, ValidadorCpfCNPJ_1.validarCPFCNPJ)(cpf));
    });
    test('Deve verificar CNPJ como True', () => {
        const cnpj = "80908401000183";
        expect((0, ValidadorCpfCNPJ_1.validarCPFCNPJ)(cnpj));
    });
    test('Deve verficar um numero que nao e CPF nem CNPJ', () => {
        const cnpj = "809084010001";
        expect(!(0, ValidadorCpfCNPJ_1.validarCPFCNPJ)(cnpj));
    });
});
