"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarAreaTotal = void 0;
//Funcao para que realiza o calculo verificando se uma AreaTotal é valida ou nao
function validarAreaTotal(data) {
    if (Number(data.areaTotal) >= Number(data.areaAgricultavel) + Number(data.areaVegetacao))
        return true;
    return false;
}
exports.validarAreaTotal = validarAreaTotal;
