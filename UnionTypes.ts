type SumaParameter = string | number;
type SumaReturnType = string | number;

function suma(num1: SumaParameter, num2: SumaParameter) {
    return num1 + num2; // Hay error porque no sabria que tpo de parametro sumar
}

function suma1(num1: SumaParameter, num2: SumaParameter) {
    return Number(num1) + Number(num2);
}

function suma2(num1: SumaParameter, num2: SumaParameter) {
    return String(num1) + String(num2);
}

function suma3(num1: SumaParameter, num2: SumaParameter): SumaReturnType {
    return String(num1) + Number(num2);
}

interface Interface1 {
    prop1: number;
}

interface Interface2 {
    prop2: number;
}

//Union types con interfaces

type InterfaceMix = Interface1 | Interface2;

const interfaceMix1:  InterfaceMix = {
    prop1: 1
};

const interfaceMix2:  InterfaceMix = {
    prop2: 1
};

const interfaceMix3:  InterfaceMix = {
    prop1: 1,
    prop2: 1
};

const interfaceMix4:  InterfaceMix = {
    prop3: 1 // Hay error porque 'prop3' no existe en ninguna interface
};
