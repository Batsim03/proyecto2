
let inputValue = '';

const onButtonClicked = () => {

	const Div1 = [
		'Mejor opción',
		'ownwer no conocido',
		'facilidades de resultados'
	]
	const listElement = document.createElement ('ul');
	listElement.className = 'Div1';
	
	for (let i=0; i<Div1.length; i++) {
		const caracteristica = Div1[i];
		contliElement=docuemnt.createElement('li');
		listElement.append(listElement);
	}
	
	document.body.append(listElement);
	

};

const onInputChanged = (input) => {
inputValue = input.value;
const inputTextH3 = document.querySelector (`#input-text`);
inputTextH3.innerText = inputValue;

};



	

