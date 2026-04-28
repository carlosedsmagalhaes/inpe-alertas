const classificarAlerta = require('../utils/classificarAlertas');
const enviarNotificacao = require('../utils/enviarNotificacao');

test("classificação + notificação", () => {
const alerta = classificarAlerta(90);
const resultado = enviarNotificacao(alerta);
expect(resultado).toBe("Notificação enviada: Crítico");
});

test("classificação + notificação para nível moderado", () => {
const alerta = classificarAlerta(30);
const resultado = enviarNotificacao(alerta);
expect(resultado).toBe("Notificação enviada: Moderado");
});

test("classificação + notificação para nível alto", () => {
const alerta = classificarAlerta(70);
const resultado = enviarNotificacao(alerta);
expect(resultado).toBe("Notificação enviada: Alto");
});