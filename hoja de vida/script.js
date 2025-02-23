document.getElementById("foto").addEventListener("change", function(event) {
    let reader = new FileReader();
    reader.onload = function() {
        document.getElementById("preview").src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
});

let registros = [];

function guardarRegistro() {
    let nuevoRegistro = {
        nombre: document.getElementById("nombre").value,
        telefono: document.getElementById("telefono").value,
        localidad: document.getElementById("localidad").value,
        correo: document.getElementById("correo").value,
        estadoCivil: document.getElementById("estadoCivil").value,
        foto: document.getElementById("preview").src,
        universidad: document.getElementById("universidad").value,
        colegio: document.getElementById("colegio").value,
        cursos: document.getElementById("cursos").value,
        trabajo: document.getElementById("trabajo").value,
        tiempo: document.getElementById("tiempo").value
    };

    registros.push(nuevoRegistro);
    alert("Registro guardado!");
}

document.getElementById("verRegistros").addEventListener("click", function() {
    document.getElementById("formulario").style.display = "none";
    document.getElementById("registros").style.display = "block";
    mostrarRegistros();
});

document.getElementById("volver").addEventListener("click", function() {
    document.getElementById("registros").style.display = "none";
    document.getElementById("formulario").style.display = "block";
});

function mostrarRegistros() {
    let lista = document.getElementById("listaRegistros");
    lista.innerHTML = "";
    registros.forEach((registro, index) => {
        let div = document.createElement("div");
        div.classList.add("cuadro");
        div.innerHTML = `
            <h3>${registro.nombre}</h3>
            <p><strong>Teléfono:</strong> ${registro.telefono}</p>
            <p><strong>Localidad:</strong> ${registro.localidad}</p>
            <p><strong>Correo:</strong> ${registro.correo}</p>
            <p><strong>Estado Civil:</strong> ${registro.estadoCivil}</p>
            <img src="${registro.foto}" width="80">
            <p><strong>Universidad:</strong> ${registro.universidad}</p>
            <p><strong>Colegio:</strong> ${registro.colegio}</p>
            <p><strong>Cursos:</strong> ${registro.cursos}</p>
            <p><strong>Trabajo:</strong> ${registro.trabajo}</p>
            <p><strong>Tiempo:</strong> ${registro.tiempo}</p>
            <button onclick="editarRegistro(${index})">Editar</button>
            <button onclick="eliminarRegistro(${index})">Borrar</button>
        `;
        lista.appendChild(div);
    });
}

function eliminarRegistro(index) {
    registros.splice(index, 1);
    mostrarRegistros();
}

function editarRegistro(index) {
    let registro = registros[index];
    document.getElementById("nombre").value = registro.nombre;
    document.getElementById("telefono").value = registro.telefono;
    document.getElementById("localidad").value = registro.localidad;
    document.getElementById("correo").value = registro.correo;
    document.getElementById("estadoCivil").value = registro.estadoCivil;
    document.getElementById("preview").src = registro.foto;
    document.getElementById("universidad").value = registro.universidad;
    document.getElementById("colegio").value = registro.colegio;
    document.getElementById("cursos").value = registro.cursos;
    document.getElementById("trabajo").value = registro.trabajo;
    document.getElementById("tiempo").value = registro.tiempo;

    registros.splice(index, 1);
    document.getElementById("registros").style.display = "none";
    document.getElementById("formulario").style.display = "block";
}
