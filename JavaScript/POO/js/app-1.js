
// Cómo crear una clase en Javascript (debe estar en mayúscula)

class Coder {
    //El metodo constructor se ejecuta automaticamente en el momento que se usa (instancia) la clase
    //Utilizando palabra NEW
    constructor(nombre, edad, lenguajes) {
        this.nombre = nombre;
        this.edad = edad;
        this.lenguajes = lenguajes;
    }
}

//Instanciar = Usar
const objCoder = new Coder("Kevin", 20, ["Python", "JavaScript"])
const objCoder2 = new Coder("Terry", 21, ["Python", "JavaScript"])

console.log(objCoder);
console.log(objCoder2);
