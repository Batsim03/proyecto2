




const setupModelsList = () => {
const listElement = document.createElement('ul');
listElement.className = 'models';

for (let i=0; i<MODELS.length; i++) {
const model = MODELS[i];

const liElement = document.createElement('li');

const buttonElement = document.createElement('button');
buttonElement.innerText = 'Eliminar';
buttonElement.className = 'delete-button';

liElement.innerText = model;
liElement.append(buttonElement);
listElement.append(liElement);};

document.body.append(listElement);}


const handleDelete = (event) => {
  
  const liElement = event.target.parentElement;
  console.log(liElement);
  liElement.remove();
}


const addDeleteButtonListeners = () => {
  const deleteButtons = document.querySelectorAll('.delete-button');
  for (let i=0; i<deleteButtons.length; i++) {
    const deleteButton = deleteButtons[i];
    deleteButton.addEventListener('click', handleDelete);
  }

}

setupModelsList();
addDeleteButtonListeners();

function getQueryVariable(variable) {
  // Estoy asumiendo que query es window.location.search.substring(1);
  var query = "product_id=32&cat_id=1&sessionid=123";
  var vars = query.split("&");
  alert(vars);
  for (var i=0; i < vars.length; i++) {
      var pair = vars[i].split("="); 
      if (pair[0] == variable) {
          return pair[1];
      }
  }
  return false;
}

const AIModels = [

{url: 'https://yes-management.net/',
detail1: 'original',
detail2: 'disruptive',
},

{url: 'https://vpxhotel.com/asia/',
detail1: 'demostration',
detail2: 'test',
},

{url: 'https://yes-management.net/',
detail1: 'modern',
detail2: 'flexible',
},
]
 
const gestModelTemplate = (url, detail1, detail2) => {

return `<div class="div1">
      <h2 class="roboto-light">1-AI Marketing insertion JS</h2>
      <picture><img class="image" src="assets/AI module_ChatPGT.jpg" alt="text alternativo"></picture>
          <ul>
              <a id="detail1" href="https://yes-management.net/pages/renting-flats-houses-in-europe" class="roboto-regular">${url}</a>
              <li class="roboto-italics">${detail1}</li>
              <li class="roboto-italics" >${detail2}</li>
          </ul>
        </div>`;
};

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
    modelo1: ["Laredo", "Gama", "Solares", "Castillo", "Santander", "https://yes-management.net"],
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

