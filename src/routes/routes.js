"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import * as ProdutorRuralController from '../controllers/ProdutorRuralController';
const ProdutorRuralController_1 = require("../controllers/ProdutorRuralController");
const AreaController_1 = require("../controllers/AreaController");
const routes = (0, express_1.Router)();
//Endpoints CRUD para o registro do Produtor Rural
routes.post('/produtores', ProdutorRuralController_1.ProdutorRuralController.criarProdutorRural);
routes.get('/produtores', ProdutorRuralController_1.ProdutorRuralController.obterProdutoresRurais);
routes.get('/produtores/:id', ProdutorRuralController_1.ProdutorRuralController.obterProdutorRuralPorId);
routes.patch('/produtores/:id', ProdutorRuralController_1.ProdutorRuralController.atualizarProdutorRural);
routes.delete('/produtores/:id', ProdutorRuralController_1.ProdutorRuralController.deletarProdutorRural);
//Endpoints para obtencao de dados sobres os produtores rurais de maneira geral
routes.get('/area/total', AreaController_1.AreaController.obterAreaTotal);
routes.get('/area/estado', AreaController_1.AreaController.obterAreaEstado);
routes.get('/area/cultura', AreaController_1.AreaController.obterAreaCultura);
exports.default = routes;
