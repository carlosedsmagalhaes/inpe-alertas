const alertaQueimada = require('../utils/alertaQueimadas');

test('alerta de queimada se nível de queimadas for maior que 70', () => {
  expect(alertaQueimada(80, 20)).toBe('Alerta de Queimadas: Risco Alto');
});

test('sem alerta de queimada se nível de queimadas for menor ou igual a 70', () => {
  expect(alertaQueimada(50, 60)).toBe('Alerta de Queimadas: Risco Baixo');
});

test('alerta de queimada se nível de queimadas for exatamente 70', () => {
  expect(alertaQueimada(70, 40)).toBe('Alerta de Queimadas: Risco Moderado');
});

test('alerta de queimada se nível de queimadas for muito alto', () => {
  expect(alertaQueimada(100, 20)).toBe('Alerta de Queimadas: Risco Alto');
});