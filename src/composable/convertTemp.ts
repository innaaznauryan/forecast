export function convertToCelsius (kelvin: number) {
    const celsius = kelvin - 273.15;
    return `${(celsius).toFixed(2)} °C`;
}

export function convertToFahrenheit (kelvin: number) {
    const fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    return `${(fahrenheit).toFixed(2)} °F`;
}