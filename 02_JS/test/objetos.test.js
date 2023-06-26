const { string, number } = require('yargs');
const persona = require('../objetos');

describe('objeto', () => {
test('tiene propiedad nombre', () => {
  expect(persona.nombre).toBe("Juan");
});
test('tiene propiedad apellido', () => {
  expect(persona.apellido).toBe("Perez");
});
test('tiene propiedad nombre', () => {
  expect(persona.edad).toBe(30);
});
test('tiene propiedad email', () => {
  expect(persona.email).toBe("email@email.com");
});
});

