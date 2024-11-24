import express from "express"
import conectarBanco from './src/config/db.config.js';
import routes from "./src/routes/postsRoutes.js";


// console.log(process.env.STRING_CONEXAO)

const app = express();

//Servir arquivos estáticos
app.use(express.static("uploads"))

routes(app)

app.listen(3000, () => {
    console.log("Servidor inicializado ...");
});



