import express from 'express';  
import AppDataSource from './data-source';
import routes from './routes';
         
AppDataSource.initialize().then(async () => {

  const app = express();  
  app.use(express.json());

  const PORT = process.env.PORT

  app.use(routes)

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} 🚀`);
  });

}).catch((error: any) => console.log(error));