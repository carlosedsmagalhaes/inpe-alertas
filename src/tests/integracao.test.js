const classificarAlerta = require('../utils/classificarAlertas');
const enviarNotificacao = require('../utils/enviarNotificacao');

test("classificação + notificação", () => {
const alerta = classificarAlerta(90);
const resultado = enviarNotificacao(alerta);
expect(resultado).toBe("Notificação enviada: Crítico");
});
