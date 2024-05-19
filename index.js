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
  
      rl.question('porfavor ingresar los litros inicales del rio/lago ', (entro) => {
      let nivelDelLago = parseInt(entro)

      //const sucecionNOaleatoria = minCuadMedios(numeroEntero, semillaHora);
      //console.log("esta es mi sucecion aleatoria", sucecionNOaleatoria);
      //console.log(calcularFrecuencia(sucecionNOaleatoria));
      //console.log(FrecuenciaEsperada(numeroEntero)); // dias de simulacion aca
      //console.log(ValorObsrvado(FrecuenciaEsperada(numeroEntero),calcularFrecuencia(minCuadMedios(numeroEntero, semillaHora))))
      let h = 0;
      do {
        const sucecionNOaleatoria = minCuadMedios(numeroEntero, semillaHora);
        if (validacionAletioridadSucecion(ValorObsrvado(FrecuenciaEsperada(numeroEntero),calcularFrecuencia(sucecionNOaleatoria))) === true) {
          console.log("Simulacion resultados",simularNivelDelLago(sucecionNOaleatoria,nivelDelLago))
          h++;
        } else {
            console.log(`Buscando Sucecion de numeros aleatorios`);
        }
    } while (h !== 1);
      // Cerrar la interfaz readline
      //console.log("",ejemplo);
      //console.log("dsa", simularNivelDelLago(ejemplo,15));
      rl.close();
    });
  });
  }

// Función para trabajar con el número entero ingresado

capturarNumeroEntero();
