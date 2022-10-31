class Contador {
  constructor(nombre) {
    this.nombre = nombre;
    this.cuentaLocal = 0;
  }
  static cuentaTotal = 0;

  contar() {
    this.cuentaLocal++;
    Contador.cuentaTotal++;
  }
  obtenerResponsable() {
    return this.nombre;
  }
  obtenerCuentaLocal() {
    return this.cuentaLocal;
  }
  obtenerCuentaTotal() {
    return Contador.cuentaTotal;
  }
}

const pepe = new Contador('pepe');
const juana = new Contador('juana');

console.log(juana.obtenerResponsable());
juana.contar();
juana.contar();
juana.contar();

console.log(juana.obtenerCuentaLocal());
console.log(juana.obtenerCuentaTotal());

console.log(pepe.obtenerResponsable());
pepe.contar();
pepe.contar();

console.log(pepe.obtenerCuentaLocal());
console.log(pepe.obtenerCuentaTotal());
