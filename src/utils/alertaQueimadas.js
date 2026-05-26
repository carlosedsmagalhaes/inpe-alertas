function alertaQueimadas(temp, umidade) {
    if (temp >= 30 && umidade <= 30) {
        return "Alerta de Queimadas: Risco Alto";
    } else if (temp >= 25 && umidade <= 40) {
        return "Alerta de Queimadas: Risco Moderado";
    } else {
        return "Alerta de Queimadas: Risco Baixo";
    }
};

module.exports = alertaQueimadas;