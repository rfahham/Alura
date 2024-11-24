import { MongoClient } from 'mongodb';

export default async function conectarBanco(stringConexao) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConexao);
        console.log('Conectando ao Cluster do banco de dados...');
        await mongoClient.connect();
        console.log('Conectado ao Mongo Atlas com sucesso!!!');

        return mongoClient;
    } catch (erro) {
        console.error('Falha ao conectar ao banco!', erro);
        process.exit();
    }
}