function validarForma(forma) {
    //Validación de usuario
    var usuario = forma.usuario;
    if (usuario.value == "" || usuario.value == "Escribir usuario") {
        alert("Debe proporcionar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false;
    }

    //Validación de password
    var password = forma.password;
    if (password.value === "" || password.value.length < 3) {
        alert("Debe proporcionar un password de al menos 3 caracteres");
        password.focus();
        password.select();
        return false;
    }

    //Validación de tecnologías
    var tecnologias = forma.tecnologia;
    var checkSeleccionado = false;

    for (var i = 0; i < tecnologias.length; i++) {
        if (tecnologias[i].checked) {
            checkSeleccionado = true;
        }
    }
    if (!checkSeleccionado) {
        alert("Debe seleccionar una tecnología");
        return false;
    }

    //Validación de género
    var generos = forma.genero;
    var radioSeleccionado = false;

    for (var i = 0; i < generos.length; i++) {
        if (generos[i].checked) {
            radioSeleccionado = true;
        }
    }
    if (!radioSeleccionado) {
        alert("Debe seleccionar un genero");
        return false;
    }

    //Validación de ocupación
    var ocupacion = forma.ocupacion;
    if (ocupacion.value == "") {
        alert("Debe seleccionar una ocupación");
        return false;
    }

    //El formulario es válido
    alert("Formulario válido, enviando datos al servidor");
    return true;
}
