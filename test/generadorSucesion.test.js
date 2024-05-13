const minCuadMedios = require('../generadorSucesion');

test('generar numeros pseudoaleatorios para 3 dias de simulacion apartir de la semilla 1111', () => {
    const semilla = 1111;
    const diasDeSimulacion = 3;
    const sucecionCorrecta = [2, 3, 4, 3, 4, 8, 9, 6, 9];
    const sucecionGenerada = minCuadMedios(diasDeSimulacion, semilla);
  
    expect(sucecionGenerada).toEqual(sucecionCorrecta); // Se utiliza toEqual para comparar arrays
  });


  test('Coroborrar que el metodo generador nos devuelve la cantidad de numeros necesarios en una sucecion para la simulacion en N dias', () => {
    const semilla = 1111;
    const diasDeSimulacion = 5;
    const sucecionGenerada = minCuadMedios(diasDeSimulacion, semilla);
  
    expect(sucecionGenerada.length).toEqual(diasDeSimulacion*3); // Se utiliza toEqual para comparar arrays
  });

  
  test('En caso de que se introduzca una cantidad Float de numeros. Agregar 1 a la sucecion', () => {
    const semilla = 1111;
    const diasDeSimulacion = 5.5;
    const sucecionGenerada = minCuadMedios(diasDeSimulacion, semilla);
  
    expect(sucecionGenerada.length).toEqual(17); // Se utiliza toEqual para comparar arrays
  });
  
  test('generar numeros pseudoaleatorios para 2 dias de simulacion apartir de la semilla 1234', () => {
    const semilla = 1234;
    const diasDeSimulacion = 2;
    const sucecionGenerada = minCuadMedios(diasDeSimulacion, semilla);
    const sucecionCorrecta = [5,2,2,7,3,2];

    expect(sucecionGenerada).toEqual(sucecionCorrecta); // Se utiliza toEqual para comparar arrays
  });