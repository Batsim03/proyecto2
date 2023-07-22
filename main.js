
function cargarProvincias() {
  var array = ["Modelo1", "Modelo2", "Modelo3", "Modelo4", "Modelo5", "Modelo6", "Modelo7", "Modelo8"];
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
    modelo1: ["Laredo", "Gama", "Solares", "Castillo", "Santander"],
    modelo2: ["Langreo", "Villaviciosa", "Oviedo", "Gijon", "Covadonga"],
    modelo3: ["Tui", "Cambados", "Redondella", "Porriño", "Ogrove"],
    modelo4: ["Dos Hermanas", "Écija", "Algeciras", "Marbella", "Sevilla"],
    modelo5: ["Caceres", "Badajoz", "Plasencia", "Zafra", "Merida"],
    modelo6: ["Loredo", "sss", "www", "eeee"],
    modelo7: ["ddfff", "ddddd", "dddd", "ddd"],
    modelo8: ["ssss", "wwww", "ssss", "ssss"],
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

