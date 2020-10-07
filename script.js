// The headline element
const display = document.querySelector('#display')

// The input field for size
const inputSize = document.querySelector('#input-size')
// The element that displays the value 
const showSize = document.querySelector('#show-size')
// Repeat this for the input and "show" elements

inputSize.addEventListener('input', handleInput)

function handleInput() {
	// get the font size:
	const fontSize = inputSize.value + 'px'
	// Set the style 
	display.style.fontSize = fontSize
	// Show the size
	showSize.innerHTML = fontSize
}