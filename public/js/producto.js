function editar (idProducto,producto,cantidad,precio,descri,idCategoria){
    $('.agregar').hide();
    $('.editar').show();
    $('#idProducto').hide();
    $("#form-producto").attr("action",`/editarProducto/${idProducto}`);
    $("#idProducto").val(idProducto);
    $("#productoM").val(producto);
    $("#cantidadM").val(cantidad);
    $("#precioM").val(precio);
    $("#descripcionM").val(descri);
    $("#idCategoriaM").val(idCategoria);
}

$(function(){
    $(".editar").hide();
});