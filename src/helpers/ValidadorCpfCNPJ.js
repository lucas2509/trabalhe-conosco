"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCPFCNPJ = void 0;
//Funcao que verifica se um CPF ou CNPJ é valido ou nao
function validarCPFCNPJ(numeroDocumentoString) {
    const numeroDocumentoArray = numeroDocumentoString.split('');
    let soma = 0;
    // Verificar se CPF é valido (11 dígitos)
    if (numeroDocumentoString.length === 11) {
        for (let i = 0; i < 9; i++)
            soma = soma + (i + 1) * Number(numeroDocumentoArray[i]);
        soma = Math.floor(soma % 11);
        if (soma == 10)
            soma = 0;
        if (soma != Number(numeroDocumentoArray[9]))
            return false;
        soma = soma * 9;
        for (let i = 0; i < 9; i++)
            soma = soma + (i) * Number(numeroDocumentoArray[i]);
        soma = Math.floor(soma % 11);
        if (soma == 10)
            soma = 0;
        if (soma == Number(numeroDocumentoArray[10]))
            return true;
    }
    // Verificar se CNPJ é Valido (14 dígitos)
    if (numeroDocumentoString.length === 14) {
        for (let i = 0; i < 12; i++) {
            if (i < 4)
                soma = soma + (5 - i) * Number(numeroDocumentoArray[i]);
            else
                soma = soma + (13 - i) * Number(numeroDocumentoArray[i]);
        }
        soma = Math.floor(soma % 11);
        if (soma < 2)
            soma = 0;
        else
            soma = 11 - soma;
        soma = soma * 2;
        for (let i = 0; i < 12; i++) {
            if (i < 5)
                soma = soma + (6 - i) * Number(numeroDocumentoArray[i]);
            else
                soma = soma + (14 - i) * Number(numeroDocumentoArray[i]);
        }
        soma = Math.floor(soma % 11);
        if (soma < 2)
            soma = 0;
        else
            soma = 11 - soma;
        if (soma == Number(numeroDocumentoArray[13]))
            return true;
    }
    return false;
}
exports.validarCPFCNPJ = validarCPFCNPJ;
