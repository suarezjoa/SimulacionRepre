const { calcularFrecuencia, FrecuenciaEsperada, ValorObsrvado, validacionAletioridadSucecion } = require('./validacionEstadistica');
const minCuadMedios = require('./generadorSucesion');
const { simularNivelDelLago } = require('./simulacionrepresa');

let now = new Date();
let hour = now.getHours().toString().padStart(2, "0");
let minute = now.getMinutes().toString().padStart(2, "0");
let second = now.getSeconds().toString().padStart(2, "0");
let hora_actual = hour + minute + second;
let semillaHora = parseInt(hora_actual.substr(-4));


const readline = require('readline');
// Crear la interfaz readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
function capturarNumeroEntero() {
    rl.question('porfavor ingresar los dias de simulacion: ', (entrada) => {
      // Convertir la entrada en un número entero usando parseInt()
      let numeroEntero = parseInt(entrada);
  
      // Verificar si la entrada es un número entero válido
      if (!isNaN(numeroEntero) && Number.isInteger(numeroEntero)) {
        // Hacer algo con el número entero, por ejemplo:
        // Llamar a una función con el número entero como argumento
        miFuncion(numeroEntero);
      } else {
        console.log("La entrada no es un número entero válido.");
      }
      let nivelDelLago = 30;

      const sucecionNOaleatoria = minCuadMedios(numeroEntero, semillaHora);
      console.log("esta es mi sucecion aleatoria", sucecionNOaleatoria);
      console.log(calcularFrecuencia(sucecionNOaleatoria));
      console.log(FrecuenciaEsperada(numeroEntero)); // dias de simulacion aca
      console.log(ValorObsrvado(FrecuenciaEsperada(numeroEntero),calcularFrecuencia(sucecionNOaleatoria)))
      if ( validacionAletioridadSucecion(ValorObsrvado(FrecuenciaEsperada(numeroEntero),calcularFrecuencia(sucecionNOaleatoria))) === true){ console.log("Simulacion resultados",simularNivelDelLago(sucecionNOaleatoria,nivelDelLago)) }
      // Cerrar la interfaz readline
      //console.log("",ejemplo);
      //console.log("dsa", simularNivelDelLago(ejemplo,15));
      rl.close();
    });
  }

// Función para trabajar con el número entero ingresado
function miFuncion(numero) {
  console.log("Tabla con los", numero);
}

capturarNumeroEntero();
