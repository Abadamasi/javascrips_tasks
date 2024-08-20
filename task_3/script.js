function convert() {
    let celciusInput = document.getElementById("celcius");
    let fahrenheitInput = document.getElementById("fahrenheit");
    let celcius = parseFloat(celciusInput.value);
    let fahrenheit = (celcius * 9) / 5 + 32;
    fahrenheitInput.value = fahrenheit.toFixed(3);
}