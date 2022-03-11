// console.log('test');

let temperature = document.getElementById('temperature');

let submitBtn = document.getElementById('submit-btn');

let displayMsg = document.getElementById('temp-msg');

submitBtn.addEventListener('click', function () {

	let conversion = (temperature.value * 9) / 5 + 32;

  let newMsg = `The new temperature is ${conversion} degrees in Fahrenheit.`;

  displayMsg.innerHTML = newMsg;

  // CSS
  displayMsg.style.backgroundColor = 'tomato';

  displayMsg.style.color = 'white';
});
