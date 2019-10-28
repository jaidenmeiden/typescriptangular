type Dni = number;

interface Persona {
    altura?: number; // El simbolo ? determina que la variable no es obligatoria
    edad: number;
    nombre: string;
    apellido: string;
    dni: Dni;
}

const persona1: Persona = {
    altura: 183,
    edad: 38,
    nombre: 'Jaiden',
    apellido: 'Riaño',
    dni: 11203248
};

const persona2: Persona = {
    edad: 38,
    nombre: 'Jaiden',
    apellido: 'Riaño',
    dni: 11203248
};

// Partial<T> Construye un tipo con todas las propiedades de 'Persona' establecidas como opcionales. Esta utilidad devolverá un tipo que representa todos los subconjuntos de un tipo dado.
const persona2: Partial<Persona> = {
    nombre: 'Jaiden',
    apellido: 'Riaño'
};
