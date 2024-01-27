import express from 'express';
import { createConnection } from 'typeorm';
import routes from './routes/routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', routes);

//Abrir conexao do servidor

createConnection().then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
}).catch(error => console.log('Erro ao conectar ao banco de dados: ', error));