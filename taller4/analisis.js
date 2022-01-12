
/*
const salariosEs = espana.map(
     function(personita){
         return personita.salary
            }
        );


const salariosEsSorted = salariosEs.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

function esPar(numerito){
    return (numerito % 2 === 0);
    
   
}
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }


function medianaSalarios(lista){
    const mitad = parseInt(lista.lenght / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica(personaMitad1, personaMitad2);
        return mediana;


    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }

}


console.log(medianaSalarios(salariosEsSorted)) */

// Helpers
function esPar(numerito) {
    return (numerito % 2 === 0);
  }
  
  function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  
  // Calculadora de mediana
  function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
  
    if (esPar(lista.length)) {
      const personitaMitad1 = lista[mitad - 1];
      const personitaMitad2 = lista[mitad];
  
      const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
      return mediana;
    } else {
      const personitaMitad = lista[mitad];
      return personitaMitad;
    }
  }
  
  
  // Mediana General
  const salariosEs = espana.map(
    function (personita) {
      return personita.salary;
    }
  );
  
  const salariosEsSorted = salariosEs.sort(
    function (salaryA, salaryB) {
      return salaryA - salaryB;
    }
  );
  const medianaGeneralEs = medianaSalarios(salariosEsSorted);
  //Mediana del top 10%
    const spliceStart = (salariosEsSorted.length * 90) / 100;
    const spliceCount = salariosEsSorted.length - spliceStart;
    const salariosEsTop10 = salariosEsSorted.splice(spliceStart, spliceCount);





    const medianaTop10Es = medianaSalarios(salariosEsTop10);
  console.log(medianaGeneralEs,
    medianaTop10Es)
  
  
  

