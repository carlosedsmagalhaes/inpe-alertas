function processarAlerta(nivel) {
    if (nivel > 80) return "Notificação enviada: Crítico";
    if (nivel > 50) return "Notificação enviada: Alto";
    return "Notificação enviada: Moderado";
}

test("processamento completo de alerta crítico", () => {
const resultado = processarAlerta(90);
expect(resultado).toBe("Notificação enviada: Crítico");
});
