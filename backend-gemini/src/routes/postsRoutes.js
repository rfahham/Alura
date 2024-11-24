import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, novoPost, uploadImagem, atualizarNovoPost } from "../controllers/postControllers.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({dest:"./uploads", storage})

// linux ou mac
// const upload = multer({ dest: "./uploads"})

const routes = (app) => {

    // Transformando os objetos em um json
    app.use(express.json());

    app.use(cors(corsOptions));
    
    app.get("/posts", listarPosts);

    app.post("/posts", novoPost)

    app.post("/upload", upload.single("imagem"), uploadImagem)

    app.put("/upload/:id", atualizarNovoPost)

}

export default routes;
