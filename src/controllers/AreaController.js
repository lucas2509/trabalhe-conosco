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
exports.AreaController = void 0;
const AreaService_1 = require("../services/AreaService");
class AreaController {
    //Metodo que trata a requisao e response para obtencao da area total dos produtores rurais
    static obterAreaTotal(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const areasTotais = yield AreaService_1.AreaService.obterAreaTotal();
                res.json({
                    status: "success",
                    data: areasTotais
                });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
    }
    //Metodo que trata a requisao e response para obtencao da area total por estado
    static obterAreaEstado(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const areasTotaisEstado = yield AreaService_1.AreaService.obterAreaEstado();
                res.json({
                    status: "success",
                    data: areasTotaisEstado
                });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
    }
    //Metodo que trata a requisao e response para obtencao da area total por estado
    static obterAreaCultura(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const areasTotaisCultura = yield AreaService_1.AreaService.obterAreaCultura();
                res.json({
                    status: "success",
                    data: areasTotaisCultura
                });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
    }
    //Metodo que trata os responses adequados para cada tipo de erro
    static handleError(error, res) {
        res.status(500).json({ status: "error", message: 'Erro interno!' });
    }
}
exports.AreaController = AreaController;
