import { Router } from 'express';
//import * as ProdutorRuralController from '../controllers/ProdutorRuralController';
import { ProdutorRuralController } from '../controllers/ProdutorRuralController';
import { AreaController } from '../controllers/AreaController'
const routes = Router();

//Endpoints CRUD para o registro do Produtor Rural
routes.post('/produtores', ProdutorRuralController.criarProdutorRural);
routes.get('/produtores', ProdutorRuralController.obterProdutoresRurais);
routes.get('/produtores/:id', ProdutorRuralController.obterProdutorRuralPorId);
routes.patch('/produtores/:id', ProdutorRuralController.atualizarProdutorRural);
routes.delete('/produtores/:id', ProdutorRuralController.deletarProdutorRural);


//Endpoints para obtencao de dados sobres os produtores rurais de maneira geral
routes.get('/area/total', AreaController.obterAreaTotal);
routes.get('/area/estado', AreaController.obterAreaEstado);
routes.get('/area/cultura', AreaController.obterAreaCultura);

export default routes;