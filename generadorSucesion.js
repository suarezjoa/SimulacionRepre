function minCuadMedios(diasDeSimulacion, semilla) {
  let now = new Date();
  let hour = now.getHours().toString().padStart(2, "0");
  let minute = now.getMinutes().toString().padStart(2, "0");
  let second = now.getSeconds().toString().padStart(2, "0");
  let hora_actual = hour + minute + second;
  let semillaHora = parseInt(hora_actual.substr(-4));
  
  let numerosGenerados = [];
  let auxiliar = (diasDeSimulacion * 4 ) - diasDeSimulacion;
  diasDeSimulacion = diasDeSimulacion * 4;
  let x = 0;
  let contadorIteraciones = 0;

  for (let i = auxiliar; i < diasDeSimulacion; i++) {
      if (contadorIteraciones < 5) {
          // Cálculo del siguiente número aleatorio
          semilla = parseInt((semilla * semilla).toString().padStart(8, "0").substr(2, 4));
          contadorIteraciones++;
      } else {
          // Modificar la semilla antes de cada iteración
          semilla = parseInt((semilla * semillaHora).toString().padStart(8, "0").substr(2, 4)); // Variar la semilla multiplicándola por el valor de la hora actual
      }

      // Asegurarse de que la semilla tenga al menos 4 dígitos
      if (semilla < 1000) {
          semilla = semilla * 10; // Ajustar la semilla si es necesario
      }

      let numString = semilla.toString();

      // Iterar sobre cada dígito y agregarlo al arreglo
      for (let j = 0; j < numString.length; j++) {
          if (x < auxiliar) {
              let num = parseInt(numString[j]);
              if (!isNaN(num)) { // Verificar que el número no sea NaN = VACIO
                  numerosGenerados.push(num);
                  x++;
              }else numerosGenerados.push(0);
          } else {
              return numerosGenerados;
          }    
      }
  }
  return numerosGenerados;
}

    module.exports = minCuadMedios;