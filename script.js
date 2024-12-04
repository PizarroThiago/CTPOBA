// --------------------------------------header-----------
let especialidades = document.getElementById("tb-especialidades")
especialidades.classList.add("tb-display-none")
function mostrarOpciones() {
    especialidades.classList.toggle("tb-display-none")
    especialidades.classList.toggle("tb-especialidades")
}

// ---------------------------------------home---------


// ------------------------------------programacion-----------
function aparecerTexto() { //Función para animación en el texto
    let contenedor = document.getElementById('aparece');
    let texto = "PROGRAMACIÓN";
    for (let i = 0; i < texto.length; i++) {
      setTimeout(() => {
        contenedor.textContent += texto[i];
        if (contenedor.textContent == texto) {
          limpiarTexto();
        }
      }, 120 * i);
    }
  
  }
  
  function limpiarTexto() {
    let contenedor = document.getElementById('aparece');
    setTimeout(() => {
      contenedor.textContent = ''
      aparecerTexto();
    }, 1500)
  
  }
  
  function efectoCursor() {
    let contenedor = document.getElementById('cursor');
    contenedor.textContent = contenedor.textContent === "|" ? "" : "|";
  }
  
  setInterval(efectoCursor, 500);
  aparecerTexto();

function toggleSections(sectionId) {
    // Secciones
    const sections = [
        { id: "bt-presentacion", className: "bt-style-none" },
        { id: "bt-alcancetitulo", className: "bt-style-none" },
        { id: "bt-perfilEgresado", className: "bt-style-none" },
        { id: "bt-planEstudio", className: "bt-style-none" }
    ];

    // Barra de Navegación
    const navItems = [
        { id: "bt-nav-presentacion", active: sectionId === "bt-presentacion" },
        { id: "bt-nav-alcance", active: sectionId === "bt-alcancetitulo" },
        { id: "bt-nav-planEstudio", active: sectionId === "bt-planEstudio" },
        { id: "bt-nav-perfilEgresado", active: sectionId === "bt-perfilEgresado" }
    ];

    // Ocultar todas las secciones y mostrar la correspondiente
    sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {  // Verificar si el elemento existe
            if (section.id === sectionId) {
                element.classList.remove(section.className);
            } else {
                element.classList.add(section.className);
            }
        }
    });

    // Intercambiar clases en los elementos del nav
    navItems.forEach(navItem => {
        const element = document.getElementById(navItem.id);
        if (element) {  // Verificar si el elemento existe
            element.classList.toggle("bt-navprogramacion-before", !navItem.active);
            element.classList.toggle("bt-navprogramacion-after", navItem.active);
        }
    });
}

//activa o desactiva la clase 'block'
function alcanceTitulo() {
    toggleSections("bt-alcancetitulo");
}

//activa o desactiva la clase 'block'
function presentacion() {
    toggleSections("bt-presentacion");
}

//activa o desactiva la clase 'block'
function perfilEgresado() {
    toggleSections("bt-perfilEgresado");
}

//activa o desactiva la clase 'block'
function planEstudio() {  // Renombrada correctamente
    toggleSections("bt-planEstudio");
}


  
//  -----------------------------------------preguntas frecuentes-----------------

  const preguntas = document.querySelectorAll('.av-boton');

  preguntas.forEach((pregunta) =>{
      pregunta.addEventListener("click", ()=>{
          const contenedorPregunta = pregunta.closest(".av-contenedor-pregunta");
          const respuesta = contenedorPregunta.querySelector(".av-respuesta");
          const isActive = respuesta.classList.contains("activo");
          removerClase();

          if(!isActive){
              respuesta.classList.add("activo");
          }
      })
  })

  function removerClase(){
      const respuestas = document.querySelectorAll(".av-respuesta");
      respuestas.forEach((respuesta) =>{
          respuesta.classList.remove("activo");
      })
  }

// ---------------------------------------------------------------

let vhome = document.querySelector(".home-completo");

let vprogramacion = document.querySelector(".btv-programacion-completo");
let vadministracion = document.querySelector(".administracion-completo");
let velectronica = document.querySelector(".LX-electronica-completo");
let velectromecanica = document.querySelector(".CV-electromecanica-completo");
let vmmo = document.querySelector(".construcciones-completo");
let vtaller = document.querySelector(".taller-completo");
let vpv = document.querySelector(".preguntas-f");
let vpodio = document.querySelector(".si-podio");


function mostrarProgramacion(){
  console.log("se hizo click");
  vprogramacion.classList.remove("display-none");
  vhome.classList.add("display-none");
  vadministracion.classList.add("display-none");
  velectronica.classList.add("display-none");
  velectromecanica.classList.add("display-none");
  vmmo.classList.add("display-none");
  vtaller.classList.add("display-none");
  vpv.classList.add("display-none");
  vpodio.classList.add("display-none");
}

function mostrarAdministracion(){
  console.log("se hizo click");
  vadministracion.classList.remove("display-none");
  vhome.classList.add("display-none");
  vprogramacion.classList.add("display-none");
  velectronica.classList.add("display-none");
  velectromecanica.classList.add("display-none");
  vmmo.classList.add("display-none");
  vtaller.classList.add("display-none");
  vpv.classList.add("display-none");
  vpodio.classList.add("display-none");
}

function mostrarPreguntasFrecuentes() { 
  console.log("se hizo click"); 
  vpv.classList.remove("display-none");
  vhome.classList.add("display-none"); 
  vadministracion.classList.add("display-none");
  velectronica.classList.add("display-none");
  velectromecanica.classList.add("display-none"); 
  vmmo.classList.add("display-none");
  vtaller.classList.add("display-none");
  vprogramacion.classList.add("display-none");
  vpodio.classList.add("display-none"); 
  } 
function mostrarTaller() { 
  console.log("se hizo click"); 
  vtaller.classList.remove("display-none"); 
  vhome.classList.add("display-none"); 
  vadministracion.classList.add("display-none"); 
  vprogramacion.classList.add("display-none"); 
  vmmo.classList.add("display-none"); 
  velectronica.classList.add("display-none"); 
  velectromecanica.classList.add("display-none"); 
  vpodio.classList.add("display-none"); 
  vpv.classList.add("display-none"); }

  function mostrarPodio(){
    console.log("se hizo click");
    vpodio.classList.remove("display-none");
    vhome.classList.add("display-none");
    vprogramacion.classList.add("display-none");
    velectronica.classList.add("display-none");
    vmmo.classList.add("display-none");
    vtaller.classList.add("display-none");
    vpv.classList.add("display-none");
    vadministracion.classList.add("display-none");
    velectromecanica.classList.add("display-none");
  }


  function mostrarHome(){
    console.log("se hizo click");
    vhome.classList.remove("display-none");
    vtaller.classList.add("display-none");
    vadministracion.classList.add("display-none");
    vprogramacion.classList.add("display-none");
    vmmo.classList.add("display-none");
    velectronica.classList.add("display-none");
    velectromecanica.classList.add("display-none");
    vpodio.classList.add("display-none");
    vpv.classList.add("display-none");
  }


  function mostrarElectronica(){
    console.log("se hizo click");
    velectronica.classList.remove("display-none");
    vtaller.classList.add("display-none");
    vadministracion.classList.add("display-none");
    vprogramacion.classList.add("display-none");
    vmmo.classList.add("display-none");
    vhome.classList.add("display-none");
    velectromecanica.classList.add("display-none");
    vpodio.classList.add("display-none");
    vpv.classList.add("display-none");
  }

  function mostrarMaestroMayorDeObra(){
    console.log("se hizo click");
    vmmo.classList.remove("display-none");
    vtaller.classList.add("display-none");
    vadministracion.classList.add("display-none");
    vprogramacion.classList.add("display-none");
    velectronica.classList.add("display-none");
    vhome.classList.add("display-none");
    velectromecanica.classList.add("display-none");
    vpodio.classList.add("display-none");
    vpv.classList.add("display-none");
  }

  function mostrarElectromecanica(){
    console.log("se hizo click");
    velectromecanica.classList.remove("display-none");
    vtaller.classList.add("display-none");
    vadministracion.classList.add("display-none");
    vprogramacion.classList.add("display-none");
    velectronica.classList.add("display-none");
    vhome.classList.add("display-none");
    vmmo.classList.add("display-none");
    vpodio.classList.add("display-none");
    vpv.classList.add("display-none");
  }


  // Dashboar login//
  function listo(){
    const usuarioIngresado = document.getElementById('usuario').value;
    const contrasenaIngresada = document.getElementById('contrasena').value;

    //muestra los datos ingresados por consola
    console.log(`Usuario: ${usuarioIngresado}, Contraseña: ${contrasenaIngresada}`);
    
    //usuario y contraseña correctos/fijos
    const usuarioCorrecto = "administrador";
    const contrasenaCorrecta = "Contraseñ4";

    if(usuarioIngresado === usuarioCorrecto && contrasenaIngresada === contrasenaCorrecta){
      alert("BienVENIDO admin xd");
      mostrarIconos();
    }

    else if(usuarioIngresado !== usuarioCorrecto){
      alert("usuario incorrecto")
    }
    else if(contrasenaIngresada !== contrasenaCorrecta){
      alert("contraseña incorrecta")
    }
    //cierra el modalal presionar el boton listo
    cerrarModal();
}

function abrirModal(){
    document.getElementById('miModal').style.display = 'block';
}

function cerrarModal(){
    document.getElementById('miModal').style.display = 'none';
}



function mostrarIconos(){
  document.getElementById('iconoscomunicado').style.display = 'flex';
  document.getElementById('iconosnovedad').style.display = 'flex';
  // document.querySelectorAll('.editaricono').style.display = 'flex';
  const iconos = document.querySelectorAll('.editaricono');
  iconos.forEach(icono => {
    icono.style.display = 'flex';
  });
  
}

document.getElementById('miModal').addEventListener('click', function(event) {
  if (event.target === this) {
      cerrarModal();
  }
});

// Agregar evento al botón de abrir modal
document.getElementById('abrirModal').onclick = abrirModal;


function abrirVentNovedad(){
  document.getElementById('fondoVentana').style.display = 'block';
  document.getElementById('contenedor-novedad').style.display = 'block';
}


function cerrar() {
  document.getElementById('fondoVentana').style.display = 'none';
}

document.getElementById('fondoVentana').addEventListener('click', function(event) {
  if (event.target === this) {
      cerrar();
  }
});



function abrirVentComunicado(){
  document.getElementById('fondoEmergente').style.display = 'block';
  document.getElementById('contenedor-comunicado').style.display = 'block';
}
function cerrarE() {
  document.getElementById('fondoEmergente').style.display = 'none';
}
document.getElementById('fondoEmergente').addEventListener('click', function(event) {
  if (event.target === this) {
      cerrarE();
  }
});

// fin del dashboard login//

var comunicados = [];
var novedades = [];
const url = "http://localhost:3000";

function publicarNovedad() {
  // Obtén los valores del formulario
  var urlNovedad = document.getElementById("urlImgNov").value.trim();
  var tituloNovedad = document.getElementById("tituloNov").value.trim();
  var descripcionNovedad = document.getElementById("descNov").value.trim();

  // Valida los datos antes de enviarlos
  if (!urlNovedad || !tituloNovedad || !descripcionNovedad) {
      console.error("Todos los campos son obligatorios.");
      alert("Por favor, completa todos los campos.");
      return; // Detiene la ejecución si hay campos vacíos
  }

  // Objeto novedad a enviar
  var novedad = {
    url_img: urlNovedad,
    titulo: tituloNovedad,
    descripcion: descripcionNovedad
};

 //publicar novedad(fecha, descripcion, y url(direccion) de la imagen)
fetch(url + "/dash/agregarn", {
  method: "POST",
  body: JSON.stringify(novedad),
  headers: {
      "Content-Type": "application/json"
  }
})
.then(response => response.text())
.then(data => {
  console.log(data);
  mostrarNovedades();
  novedades.push(novedad);
})
.catch(error => {
  console.error("Error:", error);
});

}

function publicarComunicado(){
    var tituloComunicado = document.getElementById("tituloCom").value
    var descripcionComunicado = document.getElementById("descCom").value
    var fechaComunicado = document.getElementById("fechaCom").value

    var comunicado = {
      titulo: tituloComunicado,
      descripcion: descripcionComunicado,
      fechaPublicacion: fechaComunicado,
    };
  
  //publicar comunicado (titulo, descripcion,fecha)
fetch(url + "/dash/agregarc", {
  method: "POST",
  body: JSON.stringify(comunicado),
  headers: {
      "Content-Type": "application/json"
  }
})
.then(response => response.text())
.then(data => {
  console.log(data); 
  mostrarComunicados();
  comunicados.push(comunicado);
})
.catch(error => {
  console.log("Error:", error);
});

}

/*function eliminarNovedad(index) {
  let userid = usuarios[index].id;

  //eliminar novedad
fetch(`${url}/dash/borrarn`, {
  method: "DELETE",
  body: JSON.stringify(id),
  headers: {
      "Content-Type": "application/json"
  }
})
.then(response => response.text()) 
.then(data => {
  console.log(data);
  alert('Usuario eliminado con éxito'); 
})
.catch(error => {
  console.error('Error al eliminar la novedad:', error);
  alert('Ocurrió un error al intentar eliminar una novedad');
});
  
}

function eliminarComunicado(index) {
  let userid = usuarios[index].id;

 //eliminar comunicado
fetch(`${url}/dash/borrarc`, {
  method: "DELETE",
  body: JSON.stringify(id),
  headers: {
      "Content-Type": "application/json"
  }
})
.then(response => response.text())
.then(data => {
  console.log(data);
  alert('Usuario eliminado con éxito'); 
})
.catch(error => {
  console.error('Error al eliminar el comunicado:', error);
  alert('Ocurrió un error al intentar eliminar un comunicado');
});
  
}



function actualizarNovedad() {
  // Obtén los valores del formulario
  var urlNovedad = document.getElementById("urlImgNov").value.trim();
  var tituloNovedad = document.getElementById("tituloNov").value.trim();
  var descripcionNovedad = document.getElementById("descNov").value.trim();

  // Valida los datos antes de enviarlos
  if (!urlNovedad || !tituloNovedad || !descripcionNovedad) {
      console.error("Todos los campos son obligatorios.");
      alert("Por favor, completa todos los campos.");
      return; // Detiene la ejecución si hay campos vacíos
  }

  // Objeto novedad a enviar
  var novedad = {
      urlNovedad: urlNovedad,
      tituloNovedad: tituloNovedad,
      descripcionNovedad: descripcionNovedad
  };

  fetch(`${url}/dashb/actualizarn`, {
    method: "PUT",
    body: JSON.stringify(novedad),
    headers: {
        "Content-Type": "application/json"
    }
  })
  .then(response => {
    // Verifica que la respuesta sea exitosa (código 200)
    if (!response.ok) {
        throw new Error('Error en la actualización de la novedad');
    }
    return response.json();  // Si la respuesta es exitosa, devuelve la respuesta como JSON
  })
  .then(data => {
    console.log(data); // Aquí puedes procesar la respuesta JSON de la API
    alert('Novedad actualizada con éxito');
  })
  .catch(error => {
    console.error("Error:", error);
    alert('Ocurrió un error al actualizar la novedad');
  });
}

function actualizarComunicado(){
  // Obtiene los valores del formulario
  var tituloComunicado = document.getElementById("tituloCom").value.trim();
  var descripcionComunicado = document.getElementById("descCom").value.trim();
  var fechaComunicado = document.getElementById("fechaCom").value.trim();

  // Validación de los campos
  if (!tituloComunicado || !descripcionComunicado || !fechaComunicado) {
    console.error("Todos los campos son obligatorios.");
    alert("Por favor, completa todos los campos.");
    return; // Detener la ejecución si hay campos vacíos
  }

  // Crear el objeto comunicado
  var comunicado = {
    titulo: tituloComunicado,
    descripcion: descripcionComunicado,
    fecha_publicacion: fechaComunicado,
    id_comunicado: idComunicado // Asegúrate de obtener este ID de alguna forma
};

  // Enviar los datos mediante fetch
  fetch(`${url}/dashb/actualizarc`, {
    method: "PUT",
    body: JSON.stringify(comunicado),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    // Verifica si la respuesta es exitosa (código 200)
    if (!response.ok) {
      throw new Error('Error en la actualización del comunicado');
    }
    return response.json();  // Si es exitosa, devuelve la respuesta en formato JSON
  })
  .then(data => {
    console.log(data); // Aquí puedes procesar la respuesta JSON de la API
    alert('Comunicado actualizado con éxito');
  })
  .catch(error => {
    console.error("Error:", error);
    alert('Ocurrió un error al actualizar el comunicado');
  });
}





// Variables para almacenar los datos obtenidos
/*let novedades = [
  {
      img: "https://via.placeholder.com/150",
      fechaPublicacion: "2024-10-01",
      descripcion: "Descripción de la novedad 1"
  }
];

let comunicados = [
  {
      titulo: "Comunicado 1",
      descripcion: "Descripción del comunicado 1",
      fechaPublicacion: "2024-10-03"
  }
];*/

// Función para traer novedades desde la API
/*function traerNovedades() {
  fetch('http://localhost:3000/traernovedades') //ruta del servicio
  .then(response => response.json())
  .then(advice => {
      novedades = advice;
      mostrarNovedades();
  })
  .catch(error => console.error('Error al obtener las novedades:', error));
}

// Función para mostrar las novedades en el HTML
function mostrarNovedades() {
 
  const divnovedades = document.getElementById("novedades");
  divnovedades.innerHTML = "";

  novedades.forEach((novedad) => {
      divnovedades.innerHTML += `
          <div class="tp-item-novedad">
              <img src="${novedad.img}" alt="Intertecnos 2024">
              <p class="tp-fecha">${novedad.fechaPublicacion}</p>
              <p class="tp-descripcion">${novedad.descripcion}</p>
          </div>`;
  });
}

// Función para traer comunicados desde la API

let comunicados = [];

function traerComunicados() {
  fetch('http://localhost:3000/traercomunicados') //ruta del servicio
  .then(response => response.json())
  .then(news => {
      comunicados = news;
      mostrarComunicados();
  })
  .catch(error => console.error('Error al obtener los comunicados:', error));
}



// function traerComunicados() {
//   fetch('http://localhost:3000/traercomunicados') //ruta del servicio
//   .then(response => response.json())
//   .then(news => {
//       comunicados = news;
//       mostrarComunicados();
//   })
//   .catch(error => console.error('Error al obtener los comunicados:', error));
// }



// Función para mostrar los comunicados en el HTML
function mostrarComunicados() {
  const divcomunicados = document.getElementById("comunicados");
  divcomunicados.innerHTML = "";

  comunicados.forEach((comunicado) => {
      divcomunicados.innerHTML += `
          <div class="tp-item-comunicado">
              <div class="tp-icono-fecha">
                  <img src="./img/logo.png" alt="Icono comunicado">
              </div>
              <div class="tp-detalle-comunicado">
                  <h3>${comunicado.titulo}</h3>
                  <p>${comunicado.descripcion}</p>
                  <div class="tp-fecha-comunicado">
                      <img src="./img/almanaque.png" alt="Icono calendario">
                      <span>${comunicado.fechaPublicacion}</span>
                  </div>
              </div>
          </div>`;
  });
}

// Llamadas iniciales al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  mostrarNovedades(); // Muestra datos de prueba iniciales
  mostrarComunicados(); // Muestra datos de prueba iniciales
  // Luego descomenta estas líneas para obtener datos reales desde el servidor:
  // traerNovedades();
  // traerComunicados();
});*/
