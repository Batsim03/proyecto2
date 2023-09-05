
function cargarProvincias() {
  var array = ["Model1", "Model2", "Model3", "Model4", "Model5", "Model6", "Model7", "Model8"];
  array.sort();
  addOptions("provincia", array);
}

//Función para agregar opciones a un <select>.
function addOptions(domElement, array) {
  var selector = document.getElementsByName(domElement)[0];
  for (provincia in array) {
      var opcion = document.createElement("option");
      opcion.text = array[provincia];
      // Añadimos un value a los option para hacer mas facil escoger los pueblos
      opcion.value = array[provincia].toLowerCase()
      selector.add(opcion);
  }
}

function cargarPueblos() {
  // Objeto de provincias con pueblos
  var listaPueblos = {
    model1: ["Insertion mode", "Easy to insert", "Flexible"],
    model2: ["Adaptative", "Modular", "Visual effects"],
    model3: ["Generative", "Specific", "Adaptable"],
    model4: ["Technologies", "Methodologies", "Global"],
    model5: ["Disruptive", "Functional", "Simple"],
    model6: ["Creative", "Relational", "Updated"],
    model7: ["Original", "Puntual", "Descriptible"],
    model8: ["Caracters", "Pictures", "Visual"],
  }
  
  var provincias = document.getElementById('provincia')
  var pueblos = document.getElementById('pueblo')
  var provinciaSeleccionada = provincias.value
  
  // Se limpian los pueblos
  pueblos.innerHTML = '<option value="">ver caracteristicas...</option>'
  
  if(provinciaSeleccionada !== ''){
    // Se seleccionan los pueblos y se ordenan
    provinciaSeleccionada = listaPueblos[provinciaSeleccionada]
    provinciaSeleccionada.sort()
  
    // Insertamos los pueblos
    provinciaSeleccionada.forEach(function(pueblo){
      let opcion = document.createElement('option')
      opcion.value = pueblo
      opcion.text = pueblo
      pueblos.add(opcion)
  
    });
  }
}

// Iniciar la carga de provincias solo para comprobar que funciona
cargarProvincias();

//todos los botones
let botones = document.querySelectorAll("button");

//cada vez que el valor del select cambia
exampleFormControlSelect1.addEventListener("change",()=>{
  //recupera el valor de la opción seleccionada
  let valorSeleccionado = exampleFormControlSelect1.options[exampleFormControlSelect1.selectedIndex].value;
  // para todos los botones elimina la clese visible
  botones.forEach(b =>{b.classList.remove("visible")})
  //selecciona el boton que tiene que ser visible
  
  let elBoton = document.querySelector(`.btn_${valorSeleccionado}`)
  //y si el boton existe
  if(elBoton){
  //y le añade la clase visible
  elBoton.classList.add("visible");
  }
})

function redirigir() {
  const models = document.getElementsByName("model");
  let seleccionado = null;

  for (const model of models) {
      if (model.checked) {
          seleccionado = model.value;
          break;
      }
  }

  if (seleccionado) {
      switch (seleccionado) {
          case "model1":
              window.location.href = "https://yes-management.net";
              break;
          case "model2":
              window.location.href = "https://yes-management-cce441.ingress-daribow.ewp.live/";
              break;
          case "model3":
              window.location.href = "https://yes-management-cce441.ingress-daribow.ewp.live/gallery/";
              break;
          case "model4":
              window.location.href = "https://yes-management.net/products/r-d-marketing-solutions";
              break;
          case "model5":
              window.location.href = "https://www.linkedin.com/company/y-s-management/posts/?feedView=all&viewAsMember=true";
              break;
          case "model6":
              window.location.href = "https://yes-management.net/products/hotel-management-solutions";
              break;
          case "model7":
              window.location.href = "https://yes-management.net/products/renting-housing";
              break;
          case "model8":
              window.location.href = "https://vpxhotel.com/asia/";
              break;
      }
  } else {
      alert("Please, select a model before ending.");
  }
}










