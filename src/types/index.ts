export type ProdutorRuralType = {
    id?: number;
    cpfCnpj: string;
    nome: string;
    nomeFazenda: string;
    cidade: string;
    estado: string;
    areaTotal: number;
    areaAgricultavel: number;
    areaVegetacao: number;
    culturasPlantadas: string[];
};