function classificarAlerta(nivel) {
  if (nivel > 80) return 'Crítico';
  if (nivel > 50) return 'Alto';
  return 'Moderado';
}

module.exports = classificarAlerta;