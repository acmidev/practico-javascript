console.group("Cuadrado")

function perimetroCuadrado (lado){
    return lado * 4
};
function areaCuadrado (lado){
    return Math.pow(lado, 2)
};
console.groupEnd();


console.group("Triangulos")


function perimetroTriangulo (lado1, lado2, base){
    return (Number(lado1) + Number(lado2) + Number(base));
}

function areaTriangulo (base, alturaTriangulo){
    return (base * alturaTriangulo) / 2
}
function alturaIsosceles (lado1, lado2, base){
    if(lado1 == lado2 && lado1 != base){
        altura = Math.sqrt(Math.pow(lado1,2) - (Math.pow(base,2) / 4))
    }
    return altura
}


console.groupEnd();


console.group("Circulos");

 

function diametroCirculo(radio){
    return radio * 2
};
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * Math.PI;
};
function areaCirculo (radio){
    return (radio * radio) * Math.PI
};


console.groupEnd();



 // Interaccion con html
//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};


function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);

}

//Triangulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTrianguloLado1");
    const value1 = input1.value;
    
    const input2 = document.getElementById("inputTrianguloLado2");
    const value2 = input2.value;

    const input3 = document.getElementById("inputTrianguloBase");
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);

};
function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputTrianguloBase");
    const value1 = input1.value;

    const input2 = document.getElementById("inputTrianguloAltura");
    const value2 = input2.value;
   
    
    

    const area = areaTriangulo (value1, value2);
    alert(area);

}
function calcularAlturaTriangulo(){
    const input1 = document.getElementById("inputTrianguloLado1")
    const lado1 = input1.value
    const input2 = document.getElementById("inputTrianguloLado2")
    const lado2 = input2.value
    const input3 = document.getElementById("inputTrianguloBase")
    const base = input3.value

    const altura = alturaIsosceles(lado1,lado2,base)
    alert(altura)
}

//Circulo

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);

}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);

}

