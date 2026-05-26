const eventoCritico = require('../utils/eventoCritico');

test('evento crítico de inundação se vento > 80 e chuva > 100', () => {
  expect(eventoCritico(90, 150)).toBe('Evento Crítico: Inundação');
});

test('evento crítico de ventania se vento > 80 e chuva <= 100', () => {
  expect(eventoCritico(90, 50)).toBe('Evento Crítico: Ventania');
});

test('evento crítico de tornado se vento <= 80 e chuva > 100', () => {
  expect(eventoCritico(50, 150)).toBe('Evento Crítico: Tornado');
});