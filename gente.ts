class Gente {
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

class Alumno extends Gente {
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

const gente: Gente = new Gente(183, 38, '11203248');
const alumno: Alumno = new Alumno(183, 38, '11203248', 'Normal');

let gente1: Gente;
gente1 = alumno; // Todos los objetos 'Gente' pueden ser 'Alumno', ya que 'Alumno' tiene las mismas propiedades

let alumno1: Alumno;
alumno1 = gente; // Todos los objetos 'Alumno' NO pueden ser 'Gente', debido a la propiedad matrícula
