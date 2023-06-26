const Gato = function(nombre, sonido) {
  this.nombreGato = nombre;
  this.sonidoGato = sonido;
  this.hacerSonido = function() {
    console.log( this.nombreGato + ' decir: ' + this.sonidoGato );
  };
}

const gatito = new Gato('Papá Gordo', 'Mrrooowww');
gatito.haceSonido(); 