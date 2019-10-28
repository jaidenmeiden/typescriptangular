// TypeScript automáticamente le va a asignar un tipo de dato, esto es el Type Inference.
let a = 'hola';
a = 'Holas';
a = 2; // Sale error porque se asigno tipo 'string' al inicio automaticamente (Type Inference)

let b: number = 10; // Como se utiliza un Type
b = a; // Sale error porque se asigno tipo 'number' a la variable
b = 20;
b = 10 +20;
const num1 = 10;
const num2 = 20;
b = num1 + num2;

function suma(num1: number, num2: number) {
    return num1 + num2;
}

suma(1, '2'); // Sale error porque la variable requerida es tipo 'number'

function JavaScriptVainilla(num1, num2) {
    return num1 + num2;
}

// Type keyword - Se asigna un alias a un Type para ser asignado a varias variables
type dni = string;
let variable: dni = 'Type keyword';
