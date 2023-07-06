
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
  
  const liElement = event.target.parentElement
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













 
			  






	

