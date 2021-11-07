// Nos permite configurar las variables de entorno y que no den
// problemas al utilizar importaciones de modulos al estilos ES6
import "./loadEnv.js" // si los creamos entonces debe ponerse la extención
import express from "express" // todos los paquetes de modulo no usan extencion
import router from "./routes/routes.js"

// puerto donde escucha express
const PORT = 11000

// aplicacion (server) de express
const app = express()

// Definir el sistemas de vistas (platillas) a utilizar
app.set("view engine","pug")
// Definir la ubicacion de los archivos publicos
app.use(express.static("public"))


// Configuraciones para procesar los formularios
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/",router)

// Prueba de conexion
//import cnn from "./database/connection.js"

// servidor de express escuchando en el puerto
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
