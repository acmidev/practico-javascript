



function calcularPrecioConDescuento (precio, descuento){
    
    
    const porcentajeDeDescuento = 100 - descuento;

    const precioFinal = (precio * porcentajeDeDescuento) / 100

    return precioFinal

}

function onClickButtonCalculate (){
    const inputPrice =document.getElementById("inputPrice");
    const price = inputPrice.value;
    const inputDiscount =document.getElementById("inputDiscount");
    const discount = inputDiscount.value;

    const calcularPrecioDescontado = calcularPrecioConDescuento(price, discount)

    const resultPrice = document.getElementById("resultPrice")
    resultPrice.innerText = "El Precio ya descontado es : " + calcularPrecioDescontado

}