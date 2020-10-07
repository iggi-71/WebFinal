// The headline element
const display = document.querySelector('#display')


// The input field for size
const inputSize = document.querySelector('#input-size')
// The select field for font family
const selectFont = document.querySelector('#select-font')
// The input field for input color
const inputColor = document.querySelector('#input-color')
// The input field for input background color
const inputBgColor = document.querySelector('#input-bg-color')
// The textarea field for enter text
const enterText = document.querySelector('#enter-text')



// The element that displays the value 
const showSize = document.querySelector('#show-size')
// The element that displays the value 
const showFont = document.querySelector('#show-font')
// The element that displays the value 
const showColor = document.querySelector('#show-color')
// The element that displays the value 
const showBgColor = document.querySelector('#show-bg-color')



// Event Listeners
inputSize.addEventListener('input', handleInputSize)
selectFont.addEventListener('input', handleInputFonts)
inputColor.addEventListener('input', handleInputColor)
inputBgColor.addEventListener('input', handleInputBgColor)
enterText.addEventListener('input', handleInputText)



// Event Handlers
function handleInputSize() {
	const fontSize = inputSize.value + 'px' // get the font size:
	display.style.fontSize = fontSize   // Set the style  
	showSize.innerHTML = fontSize   // Show the size
}



function handleInputFonts() {
	const fontFamily = selectFont.value     // get the font family:
	display.style.fontFamily = fontFamily       	// Set the style 
	showFont.innerHTML = fontFamily     // Show the font family
}



function handleInputColor() {
	const fontColor = inputColor.value   // get the font color:
	display.style.color = fontColor     // Set the style 
	showColor.innerHTML = fontColor	    // Show the font color
}



function handleInputBgColor() {
	const bgColor = inputBgColor.value      // get the background color:
	display.style.backgroundColor = bgColor     // Set the style 
	showBgColor.innerHTML = bgColor         // Show the background color
}



function handleInputText() {
	const text = enterText.value       	// get the font size:
	display.innerHTML = text        	// Set the style 
}