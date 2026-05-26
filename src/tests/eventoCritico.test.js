const eventoCritico = require('../utils/eventoCritico');

test('evento crítico de inundação se vento > 80 e chuva > 100', () => {
  expect(eventoCritico(90, 150)).toBe('Evento Crítico: Inundação');
});

test('evento crítico de ventania se vento > 80 e sem chuva forte', () => {
  expect(eventoCritico(90, 0)).toBe('Evento Crítico: Ventania');
});

test('evento crítico de tornado se vento > 100', () => {
  expect(eventoCritico(150, 0)).toBe('Evento Crítico: Tornado');
});

test('evento normal se vento <= 80 e chuva <= 100', () => {
  expect(eventoCritico(50, 50)).toBe('Evento Normal');
});
