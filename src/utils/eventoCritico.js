function eventoCritico(vento, volumeChuva) {
    if (vento > 80 && volumeChuva > 100) {
        return "Evento Crítico: Inundação";
    }
    if (vento > 80) {
        return "Evento Crítico: Ventania";
    }
    if (vento > 100) {
        return "Evento Crítico: Tornado";
    }
    return "Evento Normal";
};

module.exports = eventoCritico;