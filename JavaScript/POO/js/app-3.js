class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    //Sintaxis para crear métodos
    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`
    }

    retirarSaldo(retiro) {
        this.saldo -= retiro
    }

    //Este es estatico porque estoy dando una bienvenida general
    static bienvenida() {
        return "Hola, bienvenido al cajero"

    }

}

//Nuevo en este app-3.js

//Herencia
class Empresa extends Cliente {
    //Con el numeral estoy aplicando encapsulacion 
    #nit = ""
    constructor(nombre, saldo, tipo, nit) {
        //A los heredados que son padres: con super activo el constructor de los padres:
        super(nombre, saldo)
        this.tipo = tipo;
        this.#nit = nit;
    }
    //Crear un metodo encargado de mostrar el nit
    obtenerNit() {
        return this.#nit
    }

    //Polimorfismo o sobrescritura
    //En otros lenguajes se llama @Overriding
    static bienvenida() {
        return "Hola, bienvenida al cajero para empresas"
    }

}

//Instancias
console.log(Cliente.bienvenida());
const objCliente = new Cliente("Kevin", 200)
console.log(objCliente.imprimirSaldo());


//Instancias
console.log(Empresa.bienvenida);
const objEmpresa = new Empresa("Riwi", 3000, "Tecnologia", "991953121")
console.log(objEmpresa.nit);


//Obteniendo el nit despues de quitarle el encriptado
console.log(objEmpresa.obtenerNit());

console.log(objEmpresa.imprimirSaldo());

objEmpresa.retirarSaldo(1000);

console.log(objEmpresa.imprimirSaldo());
