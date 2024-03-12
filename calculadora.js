
function operate() {

    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));

    let result;
    const operation = prompt("Ingrese la operación a realizar (suma/resta/porcentaje):");

    function calculate(operation) {
        switch (operation) {
            case "suma":
                result = num1 + num2;
                break;
            case "resta":
                result = num1 - num2;
                break;
            case "porcentaje":
                result = (num1 * num2) / 100;
                break;
            default:
                result = "Operación no válida";
        }
    }


    calculate(operation);


    alert("El resultado es: " + result);


    console.log("El resultado es: " + result);


    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50];
    const searchNumber = parseInt(prompt("Ingrese un número para buscar en el array:"));


    if (numbers.includes(searchNumber)) {
        alert("El número está en el array.");
    } else {
        alert("El número no está en el array.");
    }

    const filteredNumbers = numbers.filter(number => number > 25);
    console.log("Números mayores a 25:", filteredNumbers);
}