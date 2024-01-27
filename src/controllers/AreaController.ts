import { Request, Response } from 'express';
import { AreaService } from '../services/AreaService';


export class AreaController {
  //Metodo que trata a requisao e response para obtencao da area total dos produtores rurais
  public static async obterAreaTotal (_req: Request, res: Response) {
    try {
      const areasTotais = await AreaService.obterAreaTotal();

      res.json({
        status: "success",
        data: areasTotais
      });
    } 
    catch (error) { this.handleError(error,res); }
  }

  //Metodo que trata a requisao e response para obtencao da area total por estado
  public static async obterAreaEstado (_req: Request, res: Response) {
    try {
      const areasTotaisEstado = await AreaService.obterAreaEstado();

      res.json({
        status: "success",
        data: areasTotaisEstado
      });
    } 
    catch (error) { this.handleError(error,res); }
  }

  //Metodo que trata a requisao e response para obtencao da area total por estado
  public static async obterAreaCultura (_req: Request, res: Response) {
    try {
      const areasTotaisCultura = await AreaService.obterAreaCultura();

      res.json({
        status: "success",
        data: areasTotaisCultura
      });
    } 
    catch (error) { this.handleError(error,res); }
  }
  
  //Metodo que trata os responses adequados para cada tipo de erro
  private static handleError(error : any , res: Response){
    res.status(500).json({ status: "error", message: 'Erro interno!' });
  }
}