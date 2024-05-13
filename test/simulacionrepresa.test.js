const { simularNivelDelLago, obtenerIncrementoDiario, unirValores } = require('../simulacionrepresa');

describe('simularNivelDelLago', () => {
  // Prueba 1: Verificar si la función devuelve el estado correcto del nivel del lago y las compuertas abiertas
  test('Debería devolver el estado correcto del nivel del lago y las compuertas abiertas', () => {
    const sucecionCorrecta = [2, 3, 4, 3, 4, 8, 9, 6, 9];
    const nivelInicial = 15;

    const valoresSimulados = simularNivelDelLago(sucecionCorrecta, nivelInicial);

    expect(valoresSimulados).toHaveProperty('alertaRoja');
    expect(valoresSimulados).toHaveProperty('compuerta1Abierta');
    expect(valoresSimulados).toHaveProperty('compuerta2Abierta');
    expect(valoresSimulados).toHaveProperty('compuerta3Abierta');
    expect(valoresSimulados).toHaveProperty('compuerta4Abierta');
    expect(valoresSimulados).toHaveProperty('sequia');

    expect(valoresSimulados).toStrictEqual({
      "alertaRoja": 0,
      "compuerta1Abierta": 1,
      "compuerta2Abierta": 0,
      "compuerta3Abierta": 0,
      "compuerta4Abierta": 0,
      "sequia": false
    });
  });

  // Prueba 2: Verificar si la función unirValores devuelve el número esperado
  test('La función unirValores devuelve el número esperado', () => {
    const x1 = 1;
    const x2 = 2;
    const x3 = 3;

    const resultado = unirValores(x1, x2, x3);

    expect(resultado).toBe(123);
  });
});