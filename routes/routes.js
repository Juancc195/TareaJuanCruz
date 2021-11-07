import express from "express"
import {registrarCategoria,
        registrarProducto,
        mostrarCategorias,
        eliminarCategoria,
        eliminarProducto,
        editarProducto,
        editarCategoria,
        mostrarProductos} from "../controllers/authController.js"
const router = express.Router()

router.get("/",mostrarProductos,mostrarCategorias,(req,res) =>{
    res.render("index",{datos: req.data, datosC: req.dataC});
})

router.get("/categoria",mostrarCategorias,(req,res) =>{
    res.render("categoria", {datos: req.dataC});
})

router.post("/", registrarProducto)
router.post("/categoria", registrarCategoria)
router.post("/editarProducto/:id", editarProducto)
router.post("/editarCategoria/:id", editarCategoria)
router.get("/eliminarProducto/:id", eliminarProducto)
router.get("/eliminarCategoria/:id", eliminarCategoria)


export default router