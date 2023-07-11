
const MODELS = [
  'Model 1',
  'Model 2',
  'Model 3',
  'Model 4',
  'Model 5',
  'Model 6',
  'Model 7',
  'Model 8',
];



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















 
			  






	

