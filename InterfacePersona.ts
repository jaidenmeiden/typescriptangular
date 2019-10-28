type Dni = number;

interface InterfacePersona {
    altura?: number; // El simbolo ? determina que la variable no es obligatoria
    edad: number;
    nombre: string;
    apellido: string;
    dni: Dni;
}

const interfacePersona1: InterfacePersona = {
    altura: 183,
    edad: 38,
    nombre: 'Jaiden',
    apellido: 'Riaño',
    dni: 11203248
};

const interfacePersona2: InterfacePersona = {
    edad: 38,
    nombre: 'Jaiden',
    apellido: 'Riaño',
    dni: 11203248
};

// Partial<T> Construye un tipo con todas las propiedades de 'InterfacePersona' establecidas como opcionales. Esta utilidad devolverá un tipo que representa todos los subconjuntos de un tipo dado.
const interfacePersona3: Partial<InterfacePersona> = {
    nombre: 'Jaiden',
    apellido: 'Riaño'
};
