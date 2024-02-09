// Como crear una clase en JavaScritp

class Coder {
  constructor(nombre, edad, lenguajes) {
    //El metodo constructor se ejecuta automaticamente
    //en el momento que se usa = instancia
    //utilizando palabra NEW
    this.nombre = nombre;
    this.edad = edad;
    this.lenguajes = lenguajes;
  }
}

//Instanciar = User
const objCoder = new Coder("Kevin", 20, ["Python", "Java"]);
const ObjCoder2 = new Coder("Terry", 21, ["Python", "Java"]);

console.log(objCoder.nombre);
console.log(ObjCoder2.lenguajes);

//Segunda forma

const Cliente = class Cliente {};
