
const form = document.getElementById('temp-converter-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

const temp = parseFloat(document.getElementById('temp').value);
const left = document.getElementById('left').value;
const right = document.getElementById('right').value;
let result;
if (left === right) {
    result = temp;
} else if (left === 'celsius') {
    if (right === 'fahrenheit') {
        result = (temp * 9/5) + 32;
    } else {
        result = temp + 273.15;
    }
} else if (left === 'fahrenheit') {
    if (right === 'celsius') {
        result = (temp - 32) * 5/9;
    } else {
        result = (temp - 32) * 5/9 + 273.15;
    }
}
document.getElementById('result').value = result.toFixed(2);
});
