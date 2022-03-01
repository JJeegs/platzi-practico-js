//perimetro del cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
}

// area del cuadrado
function areaCuadrado(lado){
    return lado * lado;
}

//perimetro del triangulo
function areaTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
}

//area del triangulo
function perimetroTriangulo(base, altura){
    return base * altura / 2;
}

//perimetro del circulo
function perimetroCirculo(radio){
    return 2 * Math.PI * radio;
}

//area del circulo
function areaCirculo(radio){
    return Math.PI * Math.pow(radio, 2); 
}

console.log(areaCirculo(4));