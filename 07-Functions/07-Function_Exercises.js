function greet(name){
    console.log(`hello! ${name}`);
    if(!name){
        console.log(name);
    }
}
greet('Forsiss21');
greet('Buka');
greet();

function convertToFahrenheit(celsius){
    fahrenheit = (celsius * 9 / 5) + 32
    console.log(`${fahrenheit} F.`);
    return '';
}
convertToFahrenheit(25);
convertToFahrenheit(33);

function convertToCelsius(fahrenheit){
    celsius = (fahrenheit - 32) * 5 / 9
    console.log(`${celsius} C.`);
    return '';
}

convertToCelsius(86)
convertToCelsius(95);


