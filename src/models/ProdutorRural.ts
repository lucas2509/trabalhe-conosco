import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

//Class Model para o registro de Produtor Rural
@Entity()
export class ProdutorRural {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' ,unique: true })
  cpfCnpj: string;
 
  @Column()
  nome: string;

  @Column()
  nomeFazenda: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column({ type: 'numeric' })
  areaTotal: number;

  @Column({ type: 'numeric' })
  areaAgricultavel: number;

  @Column({ type: 'numeric' })
  areaVegetacao: number;

  @Column('varchar', { array: true })
  culturasPlantadas: string[];
}