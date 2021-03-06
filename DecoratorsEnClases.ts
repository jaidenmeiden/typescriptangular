function init(target, key) {
    return class extends target {
        nombre: string = 'Jaiden';
        apellido: string = 'Riaño';

        sayMyName() {
            return `${this.nombre} ${this.apellido}`;
        }
    }
}

@init
class ClaseDecoratorClases {
    constructor() {}

    sayMyName() {}
}

const decoratorClases: ClaseDecoratorClases = new ClaseDecoratorClases();
console.log(decoratorClases.sayMyName()); // 'Jaiden Riaño'