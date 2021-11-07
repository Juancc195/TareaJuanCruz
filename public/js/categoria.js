function editar (idCategoria,nom, descri){
    $('.agregar').hide();
    $('.editar').show();
    $('#idCategoria').hide();
    $("#form-categoria").attr("action",`/editarCategoria/${idCategoria}`);
    $("#idCategoria").val(idCategoria);
    $("#categoriaM").val(nom);
    $("#descripcionM").val(descri);
}

$(function(){
    $(".editar").hide();
});