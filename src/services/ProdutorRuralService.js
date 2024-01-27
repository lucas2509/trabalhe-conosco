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
exports.ProdutorRuralService = void 0;
const typeorm_1 = require("typeorm");
const ProdutorRural_1 = require("../models/ProdutorRural");
const helpers_1 = require("../helpers");
//Classe service que possui metodos CRUD do registro dos Produtores Rurais
class ProdutorRuralService {
    //Metodo para criacao de registro do produtor rural
    static criarProdutorRural(produtorRural) {
        return __awaiter(this, void 0, void 0, function* () {
            //Faz a validacao do CPF/CNPJ antes de inserir o registro
            if ((0, helpers_1.validarCPFCNPJ)(produtorRural.cpfCnpj)) {
                //Faz a validacao da Area Total antes de inserir o registro
                if ((0, helpers_1.validarAreaTotal)(produtorRural)) {
                    const repository = (0, typeorm_1.getRepository)(ProdutorRural_1.ProdutorRural);
                    const novoProdutor = repository.create(produtorRural);
                    const resultado = yield repository.save(novoProdutor);
                    return resultado;
                }
                else
                    throw new Error("Area total não é válida");
            }
            else
                throw new Error("CPF ou CPNJ não é válido");
        });
    }
    ;
    //Metodo para obtencao dos registros dos produtores rurais
    static obterProdutoresRurais() {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = (0, typeorm_1.getRepository)(ProdutorRural_1.ProdutorRural);
            const produtores = yield repository.find();
            return produtores;
        });
    }
    //Metodo para obtencao de registro do produtor rural a partir do ID
    static obterProdutorRuralPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = (0, typeorm_1.getRepository)(ProdutorRural_1.ProdutorRural);
            const produtor = yield repository.findOneBy({ id: id });
            if (produtor)
                return produtor;
            else
                throw new Error("Produtor nao encontrado");
        });
    }
    //Metodo para atualizacao de registro do produtor rural a partir do ID
    static atualizarProdutorRural(produtorRural, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = (0, typeorm_1.getRepository)(ProdutorRural_1.ProdutorRural);
            const produtor = yield repository.findOneBy({ id: id });
            if (produtor) {
                //Faz a validacao da Area Total antes de atualizar o registro
                if ((0, helpers_1.validarAreaTotal)(produtorRural)) {
                    repository.merge(produtor, produtorRural);
                    const resultado = yield repository.save(produtor);
                    return resultado;
                }
                else
                    throw new Error("Area total não é válida");
            }
            else
                throw new Error("Produtor nao encontrado");
        });
    }
    ;
    //Metodo para exclusao de registro do produtor rural a partir do ID
    static deletarProdutorRural(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = (0, typeorm_1.getRepository)(ProdutorRural_1.ProdutorRural);
            const resultado = yield repository.delete(id);
            if (resultado.affected == 1)
                return id;
            else
                throw new Error("Produtor nao encontrado");
        });
    }
}
exports.ProdutorRuralService = ProdutorRuralService;
