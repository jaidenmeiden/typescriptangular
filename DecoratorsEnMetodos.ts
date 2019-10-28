function log(target, key) {
    console.log(key + ' se ha llamado!');
}



class ClaseDecoratorMetodos {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    @log
    sayMyName() {
        console.log(this.sayMyName);
    }
}

const decoratorMetodos: ClaseDecoratorMetodos = new ClaseDecoratorMetodos('Jaiden');
decoratorMetodos.sayMyName(); // 'jaiden' // 'sayMyName se ha llamado'