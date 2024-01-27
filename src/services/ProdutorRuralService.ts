import { getRepository } from 'typeorm';
import { ProdutorRural } from '../models/ProdutorRural';
import { ProdutorRuralType } from '../types/index'
import { validarAreaTotal, validarCPFCNPJ } from '../helpers';

//Classe service que possui metodos CRUD do registro dos Produtores Rurais
export class ProdutorRuralService {
  //Metodo para criacao de registro do produtor rural
  public static async criarProdutorRural (produtorRural : ProdutorRuralType ) {
    //Faz a validacao do CPF/CNPJ antes de inserir o registro
    if(validarCPFCNPJ(produtorRural.cpfCnpj)){
      
      //Faz a validacao da Area Total antes de inserir o registro
      if(validarAreaTotal(produtorRural)){ 
        const repository = getRepository(ProdutorRural);
        const novoProdutor = repository.create(produtorRural);
        
        const resultado = await repository.save(novoProdutor);
        
        return resultado;
      }
      else throw new Error("Area total não é válida");
    }
    else throw new Error("CPF ou CPNJ não é válido");
    
  };

  //Metodo para obtencao dos registros dos produtores rurais
  public static async obterProdutoresRurais () {
    const repository = getRepository(ProdutorRural);
    const produtores = await repository.find();
    
    return produtores;
  }

  //Metodo para obtencao de registro do produtor rural a partir do ID
  public static async obterProdutorRuralPorId (id : number) {
    const repository = getRepository(ProdutorRural);
    const produtor = await repository.findOneBy({id : id});

    if (produtor) return produtor;
    else throw new Error("Produtor nao encontrado")
  }

  //Metodo para atualizacao de registro do produtor rural a partir do ID
  public static async atualizarProdutorRural (produtorRural : ProdutorRuralType, id : number ) {
    const repository = getRepository(ProdutorRural);
    const produtor = await repository.findOneBy({id : id});
    
    
    if(produtor){
        //Faz a validacao da Area Total antes de atualizar o registro
        if(validarAreaTotal(produtorRural)){ 
          repository.merge(produtor, produtorRural);
          const resultado = await repository.save(produtor);
          
          return resultado;
        }
        else throw new Error("Area total não é válida");
    }
    else throw new Error("Produtor nao encontrado");
    
  };

  //Metodo para exclusao de registro do produtor rural a partir do ID
  public static async deletarProdutorRural (id : number) {
    const repository = getRepository(ProdutorRural);
    const resultado = await repository.delete(id);
    
    if(resultado.affected == 1) return id;
    else throw new Error("Produtor nao encontrado");
  }
}

