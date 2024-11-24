# Bakend

## Preparando o projeto

Inicializando o projeto com ES6

```bash
npm init es6 -y
```

Instalando dependências

```bash
npm install express
```

Criar o .gitignore

Criar o arquivo `server.js`

Executando o server.js

```bash
node server.js

node --watch server.js
```

Acessar a aplicação via browser

http://localhost:3000/api

Gerar a Chave do Google-Gemini

www.alura.tv/google-gemini-api

GET API key



MONGODB

rfahham - B5gcvNfxS60n5ism

```bash
npm install mongodb
```

String de conexão

mongodb+srv://rfahham:B5gcvNfxS60n5ism@cluster0.q5bgs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

depois de adicionar o comando 

 "scripts": {
    "dev": "node --watch --env-file=.env server.js",
    "test": ""
  },

```bash
npm run dev
```

CURL

GET

```bash
curl -I http://localhost:3000/posts
```

POST 

```bash
curl -X POST -H "Content-Type: application/json" -d '{"descricao": "Um gato muito esperto", "imagem": "https://placekitten.com/500/300", "alt": "Um gato muito esperto"}' http://localhost:3000/posts
```


IMAGENS

Instalando o MULTER

npm install multer

npm install @google/generative-ai

npm list @google/generative-ai
backend-gemini@1.0.0 /home/rfahham/projetos/Alura/backend-gemini
└── @google/generative-ai@0.21.0

CORS

npm install cors


npm install dotenv