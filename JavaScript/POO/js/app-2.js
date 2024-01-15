//Métodos
//van adentro de las clases, un metodo es una funcion que esta adentro de una entidad

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
console.log(Cliente.bienvenida());

//Usar la classe cliente
const objKevin = new Cliente("Kevin", 400)
console.log(objKevin);

console.log(objKevin.imprimirSaldo());

objKevin.retirarSaldo(150)

console.log(objKevin.imprimirSaldo());