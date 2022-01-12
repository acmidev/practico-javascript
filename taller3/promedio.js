




//Promedio

function calcularMediaAritmetica(lista){
   // let sumaLista = 0;

//for(let i=0; i < lista.length; i++){
  //  sumaLista = sumaLista +lista[i]
//};
    const  sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;}
        )


    const promedioLista = sumaLista / lista.length;
    return promedioLista;

};

//Mediana

/*const lista1 = [
    100,
    200,
    500,
    4000000,
]
const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito){
    if (numerito %  2 === 0){
    return  true;
} 
else {
    return false;
}}

let mediana;

if (esPar(listaOrdenada.length)){
    const elemento1 = lista1[mitadLista1 -1];
    const elemento2 = lista1[mitadLista1];


    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElemento1y2

}else{
    mediana = lista1[mitadLista1]
}*/
function ordenarLista(lista){

    function comparar(a,b){
        return a - b;
    }
    lista.sort(comparar);

}
if (esPar(lista.length)){
    const elemento1 = lista[mitadLista1 -1];
    const elemento2 = lista[mitadLista1];


    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElemento1y2

    }   else{
    mediana = lista[mitadLista1]
    }

function calcularMediana (lista){
    

    const mitadLista1 = parseInt(lista.length / 2);

    function esPar(lista){
        if (lista.length %  2 === 0){
        return  true;
    } 
    else {
        return false;
    }}
    let mediana;

    

}
