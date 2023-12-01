//your JS code here. If required.
const containerDiv = document.querySelector('.container');
const squares = [];

for(let i = 0; i < 800; i++){
    const squareDiv = document.createElement('div');
	squareDiv.classList.add('square');
	containerDiv.appendChild(squareDiv);
	squares.push(squareDiv);
}

for(const square of squares){
	 square.addEventListener('mouseover', ()=>{
		 const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); //toString covert in hexadecimal
		 square.style.backgroundColor = randomColor;
	 });

	square.addEventListener('mouseout', ()=>{
		square.style.backgroundColor = "#1d1d1d";
	});
}
