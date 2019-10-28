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
class ClaseDecorator {
    constructor() {}

    sayMyName() {}
}

const decorator: ClaseDecorator = new ClaseDecorator();
console.log(decorator.sayMyName()); // 'Jaiden Riaño'