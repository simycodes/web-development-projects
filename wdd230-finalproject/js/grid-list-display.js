const gridButton = document.querySelector("#gridBtn");
const listButton = document.querySelector("#listBtn");
const display = document.querySelector("#cards-grid");


gridButton.addEventListener("click", () => {
	display.classList.add("cards");
	display.classList.remove("list");
});


listButton.addEventListener("click", showList); 
function showList() {
	display.classList.add("list");
	display.classList.remove("cards");
}
