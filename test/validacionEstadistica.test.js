const minCuadMedios = require('../generadorSucesion'); // Suponiendo que el archivo se llama "generadorSucesion.js"
const { calcularFrecuencia, FrecuenciaEsperada, ValorObsrvado, validacionAletioridadSucecion } = require('../validacionEstadistica');
 

  // 1. Prueba de la función `calcularFrecuencia`
  test('calcular la frecuencia con la que aparecen los dígitos en una sucesión pseudoaleatoria de 3 dias de simulacion 2 Con la semilla 1111.', () => {
    const semilla = 1111;
    const diasDeSimulacion = 3;
    const sucecionGenerada = minCuadMedios(diasDeSimulacion, semilla);
    const frecuenciasEsperadas = [0,0,1,2,2,0,1,0,1,2];

    const frecuenciasCalculadas = calcularFrecuencia(sucecionGenerada);

    expect(frecuenciasCalculadas).toEqual(frecuenciasEsperadas);
  });

  // 2. Prueba de la función `FrecuenciaEsperada`
  test('FrecuenciaEsperada para diferentes días de simulación', () => {
    const diasDeSimulacion = [1, 2, 3, 4, 5];
    const frecuenciasEsperadas = [0.3, 0.6, 0.9, 1.2, 1.5];

    for (let i = 0; i < diasDeSimulacion.length; i++) {
      const frecuenciaEsperada = FrecuenciaEsperada(diasDeSimulacion[i]);
      expect(frecuenciaEsperada).toBeCloseTo(frecuenciasEsperadas[i], 2); // Redondeo a 2 decimales
    }
  });


  test('Debería devolver el valor observado correcto para un caso de entrada específico', () => {
    // Definir los valores de prueba
    const Fesperada = FrecuenciaEsperada(3);
    const sucecionGenerada = minCuadMedios(3, 1111);
    const Fobsersvada = calcularFrecuencia(sucecionGenerada); // Frecuencia observada

    // Calcular el valor observado utilizando la función a probar
    const valorObservado = ValorObsrvado(Fesperada, Fobsersvada);
    expect(Fesperada).toEqual(0.9); 
    // Verificar si el valor observado es el valor esperado
    expect(valorObservado).toBe(7.666666666666668); // El valor observado para este caso específico debería ser 4
  });


  test('Debería manejar correctamente entradas vacías o nulas', () => {
    // Definir los valores de prueba
    const Fesperada = 0;
    const Fobsersvada = [];

    // Calcular el valor observado utilizando la función a probar
    const valorObservado = ValorObsrvado(Fesperada, Fobsersvada);

    // Verificar si el valor observado es el valor esperado (en este caso debería ser 0)
    expect(valorObservado).toBe(0);
  });

  test('Test de aceptacoin del test', () => {
    // Definir los valores de prueba
    const Fesperada = FrecuenciaEsperada(3);
    const sucecionGenerada = minCuadMedios(3, 1111);
    const Fobsersvada = calcularFrecuencia(sucecionGenerada); // Frecuencia observada

    // Calcular el valor observado utilizando la función a probar
    const valorObservado = ValorObsrvado(Fesperada, Fobsersvada);
    expect(Fesperada).toEqual(0.9); 
    // Verificar si el valor observado es el valor esperado
    expect(valorObservado).toBe(7.666666666666668);
  });

  describe('validacionAletioridadSucecion', () => {
    // Prueba 1: Verificar si la función devuelve true cuando el valor observado es menor o igual al valor esperado
    test('Debería devolver true cuando Vobservado es menor o igual a Vesperado', () => {
      // Definir los valores de prueba
      // Definir los valores de prueba
      const Fesperada = FrecuenciaEsperada(3);
      const sucecionGenerada = minCuadMedios(3, 1111);
      const Fobsersvada = calcularFrecuencia(sucecionGenerada); // Frecuencia observada

      // Calcular el valor observado utilizando la función a probar
      const valorObservado = ValorObsrvado(Fesperada, Fobsersvada);
      expect(Fesperada).toEqual(0.9); 
      // Verificar si el valor observado es el valor esperado
      expect(valorObservado).toBe(7.666666666666668);
      const Vesperado = 16.9190;
  
      // Calcular el resultado utilizando la función a probar
      const resultado = validacionAletioridadSucecion(valorObservado, Vesperado);
  
      // Verificar si el resultado es true
      expect(resultado).toBe(true);
    });
  
    // Prueba 2: Verificar si la función devuelve false cuando el valor observado es mayor que el valor esperado
    test('Debería devolver false cuando Vobservado es mayor que Vesperado', () => {
      // Definir los valores de prueba
      // Definir los valores de prueba
      const Fesperada = FrecuenciaEsperada(10);
      const sucecionGenerada = minCuadMedios(10, 5968);
      const Fobsersvada = calcularFrecuencia(sucecionGenerada); // Frecuencia observada

      // Calcular el valor observado utilizando la función a probar
      const valorObservado = ValorObsrvado(Fesperada, Fobsersvada);

      const Vesperado = 1;
  
      // Calcular el resultado utilizando la función a probar
      const resultado = validacionAletioridadSucecion(valorObservado, Vesperado);
  
      // Verificar si el resultado es false
      expect(resultado).toBe(false);
    });
  
    // Prueba 3: Verificar si la función devuelve true cuando el valor observado es igual al valor esperado
    test('Debería devolver true cuando Vobservado es igual a Vesperado', () => {
      // Definir los valores de prueba
      const Vobservado = 10;
      const Vesperado = 10;
  
      // Calcular el resultado utilizando la función a probar
      const resultado = validacionAletioridadSucecion(Vobservado, Vesperado);
  
      // Verificar si el resultado es true
      expect(resultado).toBe(true);
    });

  });