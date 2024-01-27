import { getRepository } from 'typeorm';
import { ProdutorRural } from '../models/ProdutorRural';

//Classe service que possui metodos para obtencao de informacoes dos Produtores Rurais
export class AreaService {

  //Metodo para obtencao da area total
  public static async obterAreaTotal () {
    
    //Obtencao da quantidade total de registros
    const quantidadeRegistros = await getRepository(ProdutorRural)
      .createQueryBuilder('produtor')
      .select('COUNT(*) as sum')
      .getRawOne();

    //Obtencao soma da Area Total
    const quantidadeAreaTotal = await getRepository(ProdutorRural)
      .createQueryBuilder('produtor')
      .select('SUM("areaTotal") as sum')
      .getRawOne();
    
    return {quantidadeRegistros : quantidadeRegistros.sum, quantidadeAreaTotal : quantidadeAreaTotal.sum};
  };

  //Metodo para obtencao das areas totais por estado
  public static async obterAreaEstado () {
    
    const resultadoSoma = await getRepository(ProdutorRural)
      .createQueryBuilder('produtor')
      .select('estado, SUM("areaTotal") as somaAreaTotal')
      .groupBy('estado')
      .getRawMany();

    return resultadoSoma;
  };

  //Metodo para obtencao das areas totais por cultura
  public static async obterAreaCultura () {
   
    const resultadoSomaPorCultura = await getRepository(ProdutorRural)
      .createQueryBuilder('produtor')
      .select('unnest("culturasPlantadas") as culturasPlantadas, SUM("areaTotal") as somaAreaTotalPorCultura')
      .groupBy('culturasPlantadas')
      .getRawMany();

    return resultadoSomaPorCultura;
  };
}

