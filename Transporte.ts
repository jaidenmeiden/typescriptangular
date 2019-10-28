class Transporte {
    private velocidad: number;
    private formaDesplazamiento: string;

    constructor(
        velovidad: number,
        formaDesplazamiento: string
    ) {
        this.velocidad = velovidad;
        this.formaDesplazamiento = formaDesplazamiento;
    }

    getVelocidad() {
        return this.velocidad;
    }

    setVelocidad(velovidad: number) {
        this.velocidad = velovidad;
    }


    getFormaDesplazamiento() {
        return this.formaDesplazamiento;
    }

    setFormaDesplazamiento(formaDesplazamiento: string) {
        this.formaDesplazamiento = formaDesplazamiento;
    }
}

const transporte: Transporte = new Transporte(20, 'Suelo');

// Herencia
class Auto extends Transporte {
    private cantidadDePuertas: number;

    constructor(
        velovidad: number,
        formaDesplazamiento: string,
        cantidadDePuertas: number
    ) {
        super(velovidad, formaDesplazamiento);
        this.cantidadDePuertas = cantidadDePuertas;
    }

    getVelocidad() {
        return super.getVelocidad() + 10;
    }

    getCantidadDePuertas() {
        return this.cantidadDePuertas;
    }

    setCantidadDePuertas(cantidadDePuertas: number) {
        this.cantidadDePuertas = cantidadDePuertas;
    }
}

const auto: Auto = new Auto(20, 'avión', 4);
