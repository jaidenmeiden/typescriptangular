function llamado(target, key) {
    console.log(key + ' se ha llamado!');
}



class ClasePersona {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    @llamado
    sayMyName() {
        console.log(this.sayMyName);
    }
}

const persona: ClasePersona = new ClasePersona('Jaiden');
persona.sayMyName(); // 'jaiden' // 'sayMyName se ha llamado'