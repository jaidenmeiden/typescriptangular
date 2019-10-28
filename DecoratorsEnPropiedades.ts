function LogProperty(target, key) {
    let _val = this[key];
    const getter = () => {
        console.log(`Get: ${key} => ${_val}`);
        return _val;
    }
    const setter = (newValue) => {
        console.log(`Set: ${key} => ${newValue}`);
        _val = newValue;
    }

    const objectProperty = {
        get: getter,
        set: setter
    }

    Object.defineProperty(target, key, objectProperty);
}

class ClaseDecoratorPropiedades {
    @LogProperty
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const p: ClaseDecoratorPropiedades = new ClaseDecoratorPropiedades('Jaiden');
p.name = 'Alfredo'; // Set: name => 'Alfredo'
const nameFrom = p.name; // Get: name => 'Alfredo'