import express from "express"

// Array em memória

const posts = [
    {
        id: 1,
        descricao: "Gato fofo dormindo",
        imagem: "https://placekitten.com/400/200"
    },
    {
        id: 2,
        descricao: "Gatinho brincando com um novelo de lã",
        imagem: "https://placekitten.com/200/300"
    },
    {
        id: 3,
        descricao: "Paisagem com um gato",
        imagem: "https://source.unsplash.com/random/400x300/?cat,landscape"
    },
    {
        id: 4,
        descricao: "Gato preto misterioso",
        imagem: "https://placekitten.com/g/400/300"
    },
    {
        id: 5,
        descricao: "Gato olhando pela janela",
        imagem: "https://source.unsplash.com/random/300x400/?cat,window"
    }
];

// posts.forEach(post => {
//     console.log(post.descricao);
//     console.log(post.imagem);
// });

const app = express();

// Transformando os objetos em um json
app.use(express.json());

app.listen(3000, () => {

    console.log("Servidor inicializado ...");

});

app.get("/api", (req, res) => {

    res.status(200).send("Bem vindo à imersão !!!");

});

app.get("/posts", (req, res) => {

    res.status(200).json(posts);

});

// Buscar post por ID

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    }) 
};

app.get("/posts/:id", (req, res) => {

    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);

});

