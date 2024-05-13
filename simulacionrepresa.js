function simularNivelDelLago(secuenciaALATORIA, nivelActual) {
    let alertaRoja = 0;
    let compuerta1Abierta = 0;
    let compuerta2Abierta = 0;
    let compuerta3Abierta = 0;
    let compuerta4Abierta = 0;
    let sequia = false;
    let incrementoDiario = obtenerIncrementoDiario(secuenciaALATORIA);
    for (let i = 0; i < incrementoDiario.length; i++) {
      // Actualizar nivel del lago
      if (incrementoDiario[i] === 1 ){
          nivelActual = nivelActual - 3;
      }else if (incrementoDiario[i] === 2){
          nivelActual = nivelActual - 2
      }else if (incrementoDiario[i] === 3){
          nivelActual = nivelActual - 1
      }else if (incrementoDiario[i] === 4){
           nivelActual = nivelActual + 0
      }else if (incrementoDiario[i] === 5){
          nivelActual = nivelActual + 1
      }else if (incrementoDiario[i] === 6){
        nivelActual = nivelActual + 2
      }else if (incrementoDiario[i] === 7){
        nivelActual = nivelActual + 3
      }
      
      // Verificar si hay alerta roja
      console.log("nivel del agua", nivelActual)
      if (nivelActual > 45) {alertaRoja++,compuerta4Abierta++,compuerta3Abierta++,compuerta2Abierta++,compuerta1Abierta++}
      // Abrir las compuertas según sea necesario
      else if (nivelActual >= 40) {
        nivelActual = nivelActual - 3.5;
        compuerta4Abierta++,compuerta3Abierta++,compuerta2Abierta++,compuerta1Abierta++;
      }
      else if (nivelActual >= 32) {
        nivelActual = nivelActual - 2.5;
        compuerta3Abierta++,compuerta2Abierta++,compuerta1Abierta++;
      }
      else if (nivelActual >= 25) {
        nivelActual = nivelActual - 1.5;
        compuerta2Abierta++,compuerta1Abierta++;
      }
      else if (nivelActual >= 15) {
        nivelActual = nivelActual - 1;
        compuerta1Abierta++;
      }
      
  
      // Verificar si hay peligro de sequía
      if (nivelActual <= 2) {
        sequia = true;
        console.log("Registrar peligro de sequía ")
      }
    }
  
    return { alertaRoja, compuerta1Abierta, compuerta2Abierta, compuerta3Abierta, compuerta4Abierta, sequia };
  }
  
  function unirValores(x1, x2, x3) {
    // Convertir los valores a cadenas de texto
    let stringX1 = x1.toString();
    let stringX2 = x2.toString();
    let stringX3 = x3.toString();
  
    // Completar con ceros a la izquierda si es necesario
    while (stringX1.length < 1) {
      stringX1 = "0" + stringX1;
    }
    while (stringX2.length < 1) {
      stringX2 = "0" + stringX2;
    }
    while (stringX3.length < 1) {
      stringX3 = "0" + stringX3;
    }
  
    // Unir las cadenas de texto y convertir a número
    return parseInt(stringX1 + stringX2 + stringX3);
  }
  
  function EctraeValorAcompar(numerosAleatorios) {
    // Inicializar variables
    let valoresUnidos = [];
  
    // Recorrer los números aleatorios de 3 en 3
    for (let i = 0; i < numerosAleatorios.length;) {
      // Obtener los 3 números aleatorios
      let x1 = numerosAleatorios[i];
      let x2 = numerosAleatorios[i + 1];
      let x3 = numerosAleatorios[i + 2];
      i = i + 3;
      // Unir los valores y agregarlos al array
      valoresUnidos.push(unirValores(x1, x2, x3));
    }
    // Devolver el array de valores unidos
    return valoresUnidos;
  }
  
  function obtenerIncrementoDiario(SecuenciaAleatoria) {
    // Inicializar variables
    let valoresAcumulados = [0.0372, 0.2507, 0.4367, 0.5642, 0.7493, 0.9628, 1];
    let incrementos = [];
  
    // Recorrer la secuencia aleatoria de 3 en 3
    for (let i = 0; i < SecuenciaAleatoria.length; i += 3) {
      // Obtener los 3 valores aleatorios
      let x1 = SecuenciaAleatoria[i];
      let x2 = SecuenciaAleatoria[i + 1];
      let x3 = SecuenciaAleatoria[i + 2];
  
      // Unir los valores x1, x2 y x3 en un solo número
      let numeroUnido = unirValores(x1, x2, x3);
  
      // Buscar el índice en la tabla de valores acumulados
      let indice = buscarIndiceEnTabla(numeroUnido / 1000, valoresAcumulados);
  
      // Si se encuentra el índice, agregarlo al array de incrementos
      if (indice >= 0) {
        incrementos.push(indice + 1);
      }
    }
  
    // Devolver el array de incrementos
    return incrementos;
  }
  
  // Función auxiliar para buscar el índice en la tabla de valores acumulados
  function buscarIndiceEnTabla(valorComparar, valoresAcumulados) {
    for (let i = 0; i < valoresAcumulados.length; i++) {
      if (valorComparar <= valoresAcumulados[i]) {
        return i;
      }
    }
    return -1;
  }

  module.exports = { buscarIndiceEnTabla, obtenerIncrementoDiario, unirValores, simularNivelDelLago};