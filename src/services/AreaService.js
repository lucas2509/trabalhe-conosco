"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaService = void 0;
const typeorm_1 = require("typeorm");
const ProdutorRural_1 = require("../models/ProdutorRural");
//Classe service que possui metodos para obtencao de informacoes dos Produtores Rurais
class AreaService {
    //Metodo para obtencao da area total
    static obterAreaTotal() {
        return __awaiter(this, void 0, void 0, function* () {
            //Obtencao da quantidade total de registros
            const quantidadeRegistros = yield (0, typeorm_1.getRepository)(ProdutorRural_1.ProdutorRural)
                .createQueryBuilder('produtor')
                .select('COUNT(*) as sum')
                .getRawOne();
            //Obtencao soma da Area Total
            const quantidadeAreaTotal = yield (0, typeorm_1.getRepository)(ProdutorRural_1.ProdutorRural)
                .createQueryBuilder('produtor')
                .select('SUM("areaTotal") as sum')
                .getRawOne();
            return { quantidadeRegistros: quantidadeRegistros.sum, quantidadeAreaTotal: quantidadeAreaTotal.sum };
        });
    }
    ;
    //Metodo para obtencao das areas totais por estado
    static obterAreaEstado() {
        return __awaiter(this, void 0, void 0, function* () {
            const resultadoSoma = yield (0, typeorm_1.getRepository)(ProdutorRural_1.ProdutorRural)
                .createQueryBuilder('produtor')
                .select('estado, SUM("areaTotal") as somaAreaTotal')
                .groupBy('estado')
                .getRawMany();
            return resultadoSoma;
        });
    }
    ;
    //Metodo para obtencao das areas totais por cultura
    static obterAreaCultura() {
        return __awaiter(this, void 0, void 0, function* () {
            const resultadoSomaPorCultura = yield (0, typeorm_1.getRepository)(ProdutorRural_1.ProdutorRural)
                .createQueryBuilder('produtor')
                .select('unnest("culturasPlantadas") as culturasPlantadas, SUM("areaTotal") as somaAreaTotalPorCultura')
                .groupBy('culturasPlantadas')
                .getRawMany();
            return resultadoSomaPorCultura;
        });
    }
    ;
}
exports.AreaService = AreaService;
