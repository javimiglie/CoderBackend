class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  getFullName() {
    console.log(`El nombre completo es ${this.nombre} ${this.apellido}`);
  }
  addMascotas = (pet) => {
    this.mascotas.push(pet);
  };
  countMascotas() {
    console.log(`Tienes ${this.mascotas.length} mascotas en total`);
  }
  addBook = (book) => {
    this.libros.push(book);
  };
  getBookNames() {
    this.libros.forEach((el) => {
      console.log(`El nombre del libro es ${el.nombre}`);
    });
  }
}

const usuario = new Usuario(
  'Javier',
  'Miglierini',
  [
    { nombre: 'Libro 1', autor: 'Autor A' },
    { nombre: 'Libro 2', autor: 'Autor B' },
    { nombre: 'Libro 3', autor: 'Autor C' },
  ],
  ['perro', 'loro']
);

console.log(usuario);
usuario.getFullName();

usuario.addMascotas('gato');

usuario.countMascotas();

usuario.addBook({ nombre: 'Libro 4', autor: 'autor D' });
console.log(usuario);

usuario.getBookNames();
