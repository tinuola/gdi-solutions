// Make sure our JS file is connected to our HTML
// console.log('test');

let temperature = document.getElementById('temperature');

let submitBtn = document.getElementById('submit-btn');

let tempC = document.getElementById('temp-c');

let tempF = document.getElementById('temp-f');

let displayMsg = document.getElementById('temp-msg');


submitBtn.addEventListener('click', function () {

	let tempInput = temperature.value;

	if (tempC.checked) {

		let convertToCelcius = ((tempInput - 32) * 5) / 9;

		let celciusMsg = `The new temperature is ${convertToCelcius} degrees in Celcius.`;

    // Display the message and add extra CSS to the element
		displayMsg.innerHTML = celciusMsg;
		displayMsg.style.display = 'inline-block';
		displayMsg.style.backgroundColor = 'tomato';
		displayMsg.style.color = 'white';
	
	} else if (tempF.checked) {
		
		let convertToFahrenheit = (tempInput * 9) / 5 + 32;
		
    let fahrenheitMsg = `The new temperature is ${convertToFahrenheit} degrees in Fahrenheit.`;
		
    displayMsg.innerHTML = fahrenheitMsg;
		displayMsg.style.display = 'inline-block';
		displayMsg.style.backgroundColor = 'tomato';
		displayMsg.style.color = 'white';

	} else {
		
		let errorMsg = `Oops. Something went wrong... :(`;
		displayMsg.innerHTML = errorMsg;
		displayMsg.style.display = 'inline-block';
		displayMsg.style.backgroundColor = 'tomato';
		displayMsg.style.color = 'white';
		//
	}
});
