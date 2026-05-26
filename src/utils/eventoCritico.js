function eventoCritico(vento, volumeChuva) {
    if (vento > 100) {
        return "Evento Crítico: Tornado";
    }
    if (vento > 80 && volumeChuva > 100) {
        return "Evento Crítico: Inundação";
    }
    if (vento > 80) {
        return "Evento Crítico: Ventania";
    }
    return "Evento Normal";
};

module.exports = eventoCritico;