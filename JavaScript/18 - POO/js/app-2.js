//Metodos

class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  imprimirSaldo() {
    return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`;
  }

  retirarSaldo(retiro) {
    this.saldo -= retiro;
  }

  // Este metodo lo puedo utilizar sin instanciar
  static bienvenida() {
    return "Hola, Bienvenido al cajero";
  }
}
console.log(Cliente.bienvenida());
//Usar la clase cliente

const objKevin = new Cliente("Kevin", 400);

console.log(objKevin.imprimirSaldo());
objKevin.retirarSaldo(150);
console.log(objKevin.imprimirSaldo());

// Nuevo
// Herencia

class Empresa extends Cliente {
  //encapsulación
  #nit = ""; //esto se hace siempre antes de crear un privado A
  constructor(nombre, saldo, tipo, nit) {
    super(nombre, saldo);
    this.tipo = tipo;
    this.#nit = nit; //A
  }
  //crear un metodo encargado de mostrar el nit
  obtenerNit() {
    return this.#nit;
  }
  //Polimorfismo o sobrescritura
  //@Overwriting
  static bienvenida() {
    return "Hola, Bienvenida al cajero empresarial";
  }
}

//Instancias

console.log(Cliente.bienvenida());
const objCliente = new Cliente("Kevin", 200);
console.log(objCliente.imprimirSaldo());

console.log(Empresa.bienvenida());
const objEmpresa = new Empresa("Riwi", 3000, "Tecnologia", "991112");

console.log(objEmpresa.obtenerNit());
console.log(objEmpresa.imprimirSaldo());
objEmpresa.retirarSaldo(750);
console.log(objEmpresa.imprimirSaldo());
