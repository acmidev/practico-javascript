//Codigo de Cuadrado
console.group("Cuadrado")
let ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
let areaCuadrado = Math.pow(ladoCuadrado, 2);
console.log("El lado del cuadrado es: " + ladoCuadrado + "cm");
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");
console.log("El area del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

//Codigo de Triangulo
console.group("Triangulos")
let ladoTriangulo1 = 6;
let ladoTriangulo2 = 6;
let baseTriangulo1 = 4;
let alturaTriangulo = 5.5;
console.log("Los lados del Triangulo Miden: " + ladoTriangulo1 + "cm " + ladoTriangulo2  + "cm " + baseTriangulo1 + "cm ");
console.log("La Altura del triangulo es: " +alturaTriangulo);
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo1;
console.log("El Perimetro del Triangulo es: " + perimetroTriangulo );
const areaTriangulo = (baseTriangulo1 * alturaTriangulo) / 2;
console.log("El Area del Triangulo es: " + areaTriangulo + "cm^2");


console.groupEnd();

//Codigo de Circulo
console.group("Circulos");
const radio = 4 ;
const diametro = radio * 2 ;
const PI = Math.PI
const circumferencia = diametro * PI ;
const areaCirculo = (radio* radio) * PI ;
console.log("El radio del circulo es: " + radio + "cm");
console.log("El diametro del circulo es: " + diametro+ "cm");
console.log("La Circumferencia del circulo es: " + circumferencia + "cm");
console.log("El area del circulo es: " + areaCirculo + "cm^2");


console.groupEnd();