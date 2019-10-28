interface Interface1 {
    prop1: number;
}

interface Interface2 {
    prop2: number;
}

interface Interface3 {
    prop2: number;
    prop3: number;
}

//Intersection types con interfaces

type InterfaceMix1 = Interface1 & Interface2;

const interfaceMixta1:  InterfaceMix1 = {
    prop1: 1,
};

const interfaceMixta2:  InterfaceMix1 = {
    prop1: 1,
    prop2: 2,
};

type InterfaceMix2 = Interface1 & Interface2 & Interface3;

const interfaceMixta3:  InterfaceMix2 = {
    prop1: 1,
    prop2: 2,
    prop3: 1,
};