var aficiones = [];

function validar() {
    var retorno_nombre_usuario = validar_nombre_usuario();
    var retorno_contraseña = validar_contraseña();
    var retorno_confirmar_contraseña = validar_confirmar_contraseña();
    var retorno_direccion = validar_direccion();
    var retorno_comuna = validar_comuna();
    var retorno_telefono = validar_telefono();
    var retorno_url = validar_url();
    var retorno_aficiones = validar_aficiones();
    return retorno_nombre_usuario && retorno_contraseña && retorno_confirmar_contraseña && retorno_direccion && retorno_comuna && retorno_telefono && retorno_url && retorno_aficiones;
}

function validar_nombre_usuario() {
    var nombre_usuario = document.getElementById("input-nombre-usuario").value;
    var div_error = document.getElementById("error-nombre-usuario");
    console.log("Validando nombre de usuario:", nombre_usuario);
    if (nombre_usuario === "") {
        div_error.innerHTML = "El nombre de usuario es obligatorio";
        div_error.className = "text-danger small";
        return false;
    } else {
        div_error.innerHTML = "";
        return true;
    }
}

function validar_nombre_usuario() {
    var nombre_usuario = document.getElementById("input-nombre-usuario").value;
    var div_error = document.getElementById("error-nombre-usuario");
    console.log("Validando nombre de usuario:", nombre_usuario);
    
    if (nombre_usuario.length < 3) {
        div_error.innerHTML = "El nombre es demasiado corto";
        div_error.className = "text-danger small";
        return false;
    } else if (nombre_usuario.length > 10) {
        div_error.innerHTML = "El nombre no puede tener más de 10 caracteres";
        div_error.className = "text-danger small";
        return false;
    }
  
    var tiene_letra = false;
    var tiene_numero = false;
    for (var i = 0; i < nombre_usuario.length; i++) {
        var char = nombre_usuario.charAt(i);
        if (isNaN(char)) {
            tiene_letra = true;
        } else {
            tiene_numero = true;
        }
    }
    
    if (!tiene_letra) {
        div_error.innerHTML = "El nombre debe contener al menos una letra";
        div_error.className = "text-danger small";
        return false;
    }
    
    if (!tiene_numero) {
        div_error.innerHTML = "El nombre debe contener al menos un número";
        div_error.className = "text-danger small";
        return false;
    }
    
    div_error.innerHTML = "";
    return true;
}
    

function validar_contraseña() {
    var nombre_usuario = document.getElementById("input-nombre-usuario").value;
    var contraseña = document.getElementById("input-contraseña").value;
    var div_error = document.getElementById("error-contraseña");
    console.log("Validando contraseña:", contraseña);

    if (contraseña === "") {
        div_error.innerHTML = "La contraseña es obligatoria";
        div_error.className = "text-danger small";
        return false;
    } else if (contraseña.indexOf(nombre_usuario) !== -1) {
        div_error.innerHTML = "La contraseña no puede repetirse con el nombre de usuario";
        div_error.className = "text-danger small";
        return false;
    } else {
        div_error.innerHTML = "";
        return true;
    }
}

function validar_confirmar_contraseña() {
    var contraseña = document.getElementById("input-contraseña").value;
    var confirmar_contraseña = document.getElementById("input-confirmar-contraseña").value;
    var div_error = document.getElementById("error-confirmar-contraseña");
    console.log("Validando confirmar contraseña:", confirmar_contraseña);
    if (confirmar_contraseña === "") {
        div_error.innerHTML = "Debe repetir su contraseña";
        div_error.className = "text-danger small";
        return false;
    } else if (contraseña !== confirmar_contraseña) {
        div_error.innerHTML = "Las contraseñas no coinciden";
        div_error.className = "text-danger small";
        return false;
    } else {
        div_error.innerHTML = "";
        return true;
    }
}

function validar_direccion() {
    var direccion = document.getElementById("input-direccion").value;
    var div_error = document.getElementById("error-direccion");
    console.log("Validando dirección:", direccion);
    if (direccion === "") {
        div_error.innerHTML = "La dirección es obligatoria";
        div_error.className = "text-danger small";
        return false;
    } else {
        div_error.innerHTML = "";
        return true;
    }
}

function validar_comuna() {
    var comuna = document.getElementById("select-comuna").value;
    var div_error = document.getElementById("error-comuna");
    console.log("Validando comuna:", comuna);
    if (comuna === "default") {
        div_error.innerHTML = "Debe seleccionar una comuna";
        div_error.className = "text-danger small";
        return false;
    } else {
        div_error.innerHTML = "";
        return true;
    }
}

function validar_telefono() {
    var codigo_pais = document.getElementById("input-codigo-pais").value;
    var telefono = document.getElementById("input-telefono").value;
    var div_error = document.getElementById("error-telefono");
    console.log("Validando teléfono:", telefono);
    if (codigo_pais === "" || telefono === "") {
        div_error.innerHTML = "El número de telefono es obligatorio";
        div_error.className = "text-danger small";
        return false;
    } else {
        div_error.innerHTML = "";
        return true;
    }
}

function validar_url() {
    var url = document.getElementById("input-url").value;
    var div_error = document.getElementById("error-url");
    console.log("Validando URL:", url);
    if (url === "" || url.startsWith("http://") || url.startsWith("https://") || url.startsWith("www.")) {
        div_error.innerHTML = "";
        return true;
    } else {
        div_error.innerHTML = "Su URL debe comenzar con 'http://' o 'https://', o 'www.'";
        div_error.className = "text-danger small";
        return false;
    }
}



function agregarAficion() {
    var aficion = document.getElementById("input-aficiones").value;
    var div_error = document.getElementById("error-aficiones");
    console.log("Agregando afición:", aficion);
    if (aficion.trim() !== "") {
        aficiones.push(aficion);
        actualizarListaAficiones();
        document.getElementById("input-aficiones").value = "";
        div_error.innerHTML = "";
    } else {
        div_error.innerHTML = "La afición no contiene un dato, vuelve a intentarlo";
        div_error.className = "text-danger small";
    }
}

function actualizarListaAficiones() {
    var lista = document.getElementById("lista-aficiones");
    lista.innerHTML = "";
    aficiones.forEach(function(aficion) {
        var item = document.createElement("li");
        item.className = "list-group-item list-group-item-dark";
        item.textContent = aficion;
        lista.appendChild(item);
    });
}

function validar_aficiones() {
    var div_error = document.getElementById("error-aficiones");
    console.log("Validando aficiones:", aficiones);
    if (aficiones.length < 2) {
        div_error.innerHTML = "Debe agregar al menos dos aficiones";
        div_error.className = "text-danger small";
        return false;
    } else {
        div_error.innerHTML = "";
        return true;
    }
}

function toggleContraseña(id) {
    var input = document.getElementById(id);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}
