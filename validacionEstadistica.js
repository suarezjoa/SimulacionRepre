function calcularFrecuencia(sucecionPseualeatoria){
 
    let frecuencias = Array.from({ length: 10 }, () => 0); // Inicializar un arreglo de 10 elementos con valores 0
    
    for (let numero of sucecionPseualeatoria) {
      // Obtener el último dígito del número y aumentar su frecuencia
      let digito = numero % 10;
      frecuencias[digito]++;
      }
      return frecuencias;
  }
  function FrecuenciaEsperada(n){
    n = n * 3;
    var k = 1/10;
    var nPi = (n*k);
    return nPi;
  }
  
  function ValorObsrvado(Fesperada, Fobsersvada){
    let sumaFinal = 0;
    for (let i = 0; i < Fobsersvada.length; i++) {
      let valor = ((Fobsersvada[i] - Fesperada) * (Fobsersvada[i] - Fesperada)) / Fesperada
      sumaFinal = sumaFinal + valor;
    }
    return sumaFinal;
  }

  function validacionAletioridadSucecion(Vobservado,Vesperado){

    if( Vobservado <= Vesperado ) return true;
    else return false;

  }
module.exports = { calcularFrecuencia, FrecuenciaEsperada, ValorObsrvado, validacionAletioridadSucecion};