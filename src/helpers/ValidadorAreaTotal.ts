//Funcao para que realiza o calculo verificando se uma AreaTotal é valida ou nao
export function validarAreaTotal(data: any) : boolean{
    
    if(Number(data.areaTotal) >= Number(data.areaAgricultavel) + Number(data.areaVegetacao)) return true;
    
    return false;    
}