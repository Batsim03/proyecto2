const $btnOcultar = document.querySelector("#btnOcultar"),
	$btnMostrar = document.querySelector("#btnMostrar"),
	$parrafo = document.querySelector("#parrafo");

$btnMostrar.addEventListener("click", () => {
	$parrafo.style.display = "value";
});


$btnOcultar.addEventListener("click", () => {
	$parrafo.style.display = "none";
});


