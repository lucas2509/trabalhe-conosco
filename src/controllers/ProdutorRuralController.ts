import { Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';
import { ProdutorRuralType } from '../types/index'
import { ProdutorRuralService } from '../services/ProdutorRuralService'


export class ProdutorRuralController {
  //Metodo que trata a requisao e response para criacao de registro do produtor rural
  public static async criarProdutorRural (req: Request, res: Response) {
    try{
      const produtorRural = req.body as ProdutorRuralType;
      const produtorRuralCriado =  await ProdutorRuralService.criarProdutorRural(produtorRural);

      res.status(201).json({
        status: "success",
        data: produtorRuralCriado
      });
    }
    catch (error) { ProdutorRuralController.handleError(error,res); }
  };

  //Metodo que trata a requisao e response para obtencao dos registros dos produtores rurais
  public static async obterProdutoresRurais (req: Request, res: Response) {
    try{
      const produtoresRurais  = await ProdutorRuralService.obterProdutoresRurais();

      res.json({
        status: "success",
        data: produtoresRurais
      });
    }
    catch (error) { ProdutorRuralController.handleError(error,res); }
  }

  //Metodo que trata a requisao e response para obtencao do registro do produtor rural a partir do ID
  public static async obterProdutorRuralPorId (req: Request, res: Response) {
    try{
      const id = Number(req.params.id);
      const produtorRural = await ProdutorRuralService.obterProdutorRuralPorId(id);

      res.json({
        status: "success",
        data: produtorRural
      });
    }
    catch (error) { ProdutorRuralController.handleError(error,res); }
  }

  //Metodo que trata a requisao e response para atualizacao do registro do produtor rural a partir do ID
  public static async atualizarProdutorRural (req: Request, res: Response) {
    try{
      const produtorRural = req.body as ProdutorRuralType;
      const id = Number(req.params.id);

      const produtorRuralAtualizado =  await ProdutorRuralService.atualizarProdutorRural(produtorRural, id);

      res.json({
        status: "success",
        data: produtorRuralAtualizado
      });
    }
    catch (error) { ProdutorRuralController.handleError(error,res); }
  }

  //Metodo que trata a requisao e response para exclusao do registro do produtor rural a partir do ID
  public static async deletarProdutorRural (req: Request, res: Response) {
    try{
      const id = Number(req.params.id);

      const produtorRuralDeletado =  await ProdutorRuralService.deletarProdutorRural(id);

      res.json({
        status: "success",
        id: produtorRuralDeletado
      });
    }
    catch (error) { ProdutorRuralController.handleError(error,res); }
  }
  
  //Metodo que trata os responses adequados para cada tipo de erro
  private static handleError(error : any , res: Response){
   
    if(error instanceof Error && error.message === "Produtor nao encontrado") res.status(404).json({ status: "error", message: error.message });
    if(error instanceof Error && error.message === "Area total não é válida") res.status(400).json({ status: "error", message: error.message });
    if(error instanceof Error && error.message === "CPF ou CNPJ não é válido") res.status(400).json({ status: "error", message: error.message });
    if (error instanceof QueryFailedError ) res.status(400).json({ status: "error", message: 'CPF ou CNPJ ja cadastrado' });

    if(!res.headersSent) res.status(500).json({ status: "error", message: 'Erro interno!' });
    console.log("Error -> "+error.message)
  }
}