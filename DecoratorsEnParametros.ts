function LogParameter(target, key, index) {
    const metaDataKey = `log_${key}_parameters`;
    if(Array.isArray(target[metaDataKey])) {
        target[metaDataKey].push(index);
    } else {
        target[metaDataKey] = [index];
    }
}

class ClaseDecoratorParametros {
    greet(@LogParameter message: string): string {
        return message;
    }
}

const parametro = new ClaseDecoratorParametros();
parametro.greet('Hola!');