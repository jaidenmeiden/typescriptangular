class ClasePersona {
    private altura: number;
    private edad: number;
    private dni: string;

    constructor(
        altura: number,
        edad: number,
        dni: string
    ) {
        this.altura = altura;
        this.edad = edad;
        this.dni = dni;
    }
}

class ClaseAlumno extends ClasePersona {
    private matricula: string;

    constructor(
        altura: number,
        edad: number,
        dni: string,
        matricula: string
    ) {
        super(altura, edad, dni);
        this.matricula = matricula;
    }
}

const clasePersona: ClasePersona = new ClasePersona(183, 38, '11203248');
const claseAlumno: ClaseAlumno = new ClaseAlumno(183, 38, '11203248', 'Normal');

let clasePersona1: ClasePersona;
clasePersona1 = claseAlumno; // Todos los objetos 'ClasePersona' pueden ser 'ClaseAlumno', ya que 'ClaseAlumno' tiene las mismas propiedades

let claseAlumno1: ClaseAlumno;
claseAlumno1 = clasePersona; // Todos los objetos 'ClaseAlumno' NO pueden ser 'ClasePersona', debido a la propiedad matrícula
