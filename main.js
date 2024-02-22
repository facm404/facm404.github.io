// Espera a que se cargue el documento
document.addEventListener("DOMContentLoaded", function () {
    // Obtiene el elemento a animar
    const textToAnimate = document.getElementById("textToAnimate");
  
    // Agrega un evento para detectar el final de la animación
    textToAnimate.addEventListener("animationend", function () {
      // Elimina el elemento después de que termine la animación
      textToAnimate.parentNode.removeChild(textToAnimate);
    });
  
    setTimeout(function () {
      var lineaBorde = document.querySelector(".linea-borde");
      lineaBorde.style.opacity = "1"; // Hacer que la línea sea visible
    }, 5000); // 5000 milisegundos (5 segundos)
  });
  
  // Espera a que se cargue el documento
  document.addEventListener("DOMContentLoaded", function () {
    // Obtiene el elemento del encabezado
    const header = document.getElementById("SiteHeader");
  
    // Obtiene el elemento a animar
    const textToAnimate = document.getElementById("textToAnimate");
  
    // Agrega un evento para detectar el final de la animación de desvanecimiento
    textToAnimate.addEventListener("animationend", function () {
      // Muestra el encabezado después de que termine la animación
      header.style.display = "block";
    });
  });
  
  function mostrarParrafo() {
    console.log("boton se ejecuta");
    var parrafo = document.getElementById("parrafo");
  
    // Cambia el estilo de visualización
    if (parrafo.style.display === "none") {
      parrafo.style.display = "block";
    } else {
      parrafo.style.display = "none";
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const proyectosButton = document.getElementById("proyectosButton");
    let listadoVisible = false; // Variable para rastrear el estado del listado
    let listadoProyectos = null; // Variable para rastrear el elemento del listado
  
    proyectosButton.addEventListener("click", function () {
      if (listadoVisible) {
        // Si el listado está visible, lo ocultamos con una animación de fade out
        listadoProyectos.classList.remove("animate__fadeIn");
        listadoProyectos.classList.add("animate__fadeOut");
        setTimeout(function () {
          listadoProyectos.style.display = "none"; // Ocultamos el listado después de la animación
        }, 1000); // Ajusta el tiempo según la duración de la animación
        listadoVisible = false;
      } else {
        if (!listadoProyectos) {
          // Si el listado no existe, lo creamos
          listadoProyectos = document.createElement("div");
          listadoProyectos.className =
            "listado-proyectos animate__animated animate__fadeIn";
  
          const lista = document.createElement("ul");
          lista.classList.add("agregados");
          const proyecto1 = document.createElement("li");
          proyecto1.textContent = "Proyecto 1";
          const proyecto2 = document.createElement("li");
          proyecto2.textContent = "Proyecto 2";
          const proyecto3 = document.createElement("li");
          proyecto3.textContent = "Proyecto 3";
          const proyecto4 = document.createElement("li");
          proyecto4.textContent = "Proyecto 4";
          const proyecto5 = document.createElement("li");
          proyecto5.textContent = "Proyecto 5";
  
          listadoProyectos.appendChild(lista);
          lista.append(proyecto1,proyecto2,proyecto3,proyecto5);
  
          listadoProyectos.appendChild(lista);
  
          document.body.appendChild(listadoProyectos);
  
          // Mostramos el listado
          listadoVisible = true;
  
          // Centrar verticalmente el listado
          listadoProyectos.style.top = "50%";
          listadoProyectos.style.transform = "translateY(-50%)";
        } else {
          // Si el listado ya existe, simplemente lo mostramos
          listadoProyectos.style.display = "flex";
          listadoProyectos.classList.remove("animate__fadeOut");
          listadoProyectos.classList.add("animate__fadeIn");
          listadoVisible = true;
        }
      }
    });
  });
  