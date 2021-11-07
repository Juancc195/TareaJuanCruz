import con from "../database/connection.js"

var session
export const mostrarProductos = async (req, res,next) => {
    const data = {};
    con.query(`SELECT * FROM producto as p inner join categoria as c on p.idCategoria=c.idCategoria`, data, (err, result) => {
        if(err){
            console.log("Ocurrio un error al insertar el registro")
            return
        }
        req.data = result;
        next()
    })
} 

export const mostrarCategorias = async (req, res,next) => {
    const dataC = {};
    con.query('SELECT * FROM categoria', dataC, (err, result) => {
        if(err){
            console.log("Ocurrio un error al insertar el registro")
            return
        }
        req.dataC = result;
        next()
    })
} 

export const registrarProducto = async (req, res) => {
    const {producto,cantidad,precio,descripcion,idCategoria} = req.body
    console.log(idCategoria)

    const data = {
        producto: producto,
        cantidad: cantidad,
        precio: precio,
        descripcion: descripcion,
        idCategoria: idCategoria
    }
    console.log(data)
    con.query('INSERT INTO producto SET ?', data, (err, result) => {
        if(err){
            console.log("Ocurrio un error al insertar el registro")
            return
        }

        res.redirect("/")
    })

}

export const registrarCategoria = async (req, res) => {
    const {categoria, descripcionCategoria} = req.body

    const data = {
        categoria: categoria,
        descripcionCategoria: descripcionCategoria
    }

    con.query('INSERT INTO categoria SET ?', data, (err, result) => {
        if(err){
            console.log("Ocurrio un error al insertar el registro")
            return
        }

        res.redirect("/categoria")
    })

}

export const eliminarProducto = async (req, res, next) => {
    const {id} = req.params;

    con.query('DELETE FROM producto WHERE idProducto = ?', [id], (err, result) => {
        if(err){
            console.log("Ocurrio un error al insertar el registro")
            return
        }

        res.redirect("/")
        next();
    })
}

export const eliminarCategoria = async (req, res, next) => {
    const {id} = req.params;

    con.query('DELETE FROM categoria WHERE idCategoria = ?', [id], (err, result) => {
        if(err){
            console.log("Ocurrio un error al insertar el registro")
            return
        }

        res.redirect("/categoria")
        next();
    })
}

export const editarProducto = async (req, res, next) => {
    const {producto,cantidad,precio,descripcion,idCategoria} = req.body
    const {id} = req.params;
    
    const data = [
        producto,
        cantidad,
        precio,
        descripcion,
        idCategoria,
        id
    ];
    console.log(data)
    con.query("UPDATE producto SET producto = ?, cantidad = ?, precio = ?, descripcion = ?, idCategoria = ? WHERE idProducto = ?", data, (err, result) => {
        if(err){
            console.log("Ocurrio un error al actualizar el registro",err)
            return
        }

        res.redirect("/")
        next()
    })
}

export const editarCategoria = async (req, res, next) => {
    const {categoria,descripcionCategoria} = req.body
    const {id} = req.params;
    
    const data = [
        categoria,
        descripcionCategoria,
        id
    ];
    con.query("UPDATE categoria SET categoria = ?, descripcionCategoria = ? WHERE idCategoria = ?", data, (err, result) => {
        if(err){
            console.log("Ocurrio un error al actualizar el registro",err)
            return
        }

        res.redirect("/categoria")
        next()
    })
}