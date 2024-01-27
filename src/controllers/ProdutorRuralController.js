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
exports.ProdutorRuralController = void 0;
const typeorm_1 = require("typeorm");
const ProdutorRuralService_1 = require("../services/ProdutorRuralService");
class ProdutorRuralController {
    //Metodo que trata a requisao e response para criacao de registro do produtor rural
    static criarProdutorRural(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const produtorRural = req.body;
                const produtorRuralCriado = yield ProdutorRuralService_1.ProdutorRuralService.criarProdutorRural(produtorRural);
                res.status(201).json({
                    status: "success",
                    data: produtorRuralCriado
                });
            }
            catch (error) {
                ProdutorRuralController.handleError(error, res);
            }
        });
    }
    ;
    //Metodo que trata a requisao e response para obtencao dos registros dos produtores rurais
    static obterProdutoresRurais(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const produtoresRurais = yield ProdutorRuralService_1.ProdutorRuralService.obterProdutoresRurais();
                res.json({
                    status: "success",
                    data: produtoresRurais
                });
            }
            catch (error) {
                ProdutorRuralController.handleError(error, res);
            }
        });
    }
    //Metodo que trata a requisao e response para obtencao do registro do produtor rural a partir do ID
    static obterProdutorRuralPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const produtorRural = yield ProdutorRuralService_1.ProdutorRuralService.obterProdutorRuralPorId(id);
                res.json({
                    status: "success",
                    data: produtorRural
                });
            }
            catch (error) {
                ProdutorRuralController.handleError(error, res);
            }
        });
    }
    //Metodo que trata a requisao e response para atualizacao do registro do produtor rural a partir do ID
    static atualizarProdutorRural(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const produtorRural = req.body;
                const id = Number(req.params.id);
                const produtorRuralAtualizado = yield ProdutorRuralService_1.ProdutorRuralService.atualizarProdutorRural(produtorRural, id);
                res.json({
                    status: "success",
                    data: produtorRuralAtualizado
                });
            }
            catch (error) {
                ProdutorRuralController.handleError(error, res);
            }
        });
    }
    //Metodo que trata a requisao e response para exclusao do registro do produtor rural a partir do ID
    static deletarProdutorRural(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const produtorRuralDeletado = yield ProdutorRuralService_1.ProdutorRuralService.deletarProdutorRural(id);
                res.json({
                    status: "success",
                    id: produtorRuralDeletado
                });
            }
            catch (error) {
                ProdutorRuralController.handleError(error, res);
            }
        });
    }
    //Metodo que trata os responses adequados para cada tipo de erro
    static handleError(error, res) {
        if (error instanceof Error && error.message === "Produtor nao encontrado")
            res.status(404).json({ status: "error", message: error.message });
        if (error instanceof Error && error.message === "Area total não é válida")
            res.status(400).json({ status: "error", message: error.message });
        if (error instanceof Error && error.message === "CPF ou CNPJ não é válido")
            res.status(400).json({ status: "error", message: error.message });
        if (error instanceof typeorm_1.QueryFailedError)
            res.status(400).json({ status: "error", message: 'CPF ou CNPJ ja cadastrado' });
        if (!res.headersSent)
            res.status(500).json({ status: "error", message: 'Erro interno!' });
        console.log("Error -> " + error.message);
    }
}
exports.ProdutorRuralController = ProdutorRuralController;
