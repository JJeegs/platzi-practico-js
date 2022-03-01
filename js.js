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

//altura de un triangulo isoceles
function alturaTriangulo(lado1, lado2, lado3){
    if (lado1 == lado2){
        return Math.sqrt(Math.pow(lado1, 2)-(Math.pow(lado3, 2)/4));
    }
    else if(lado2 == lado3){
        return Math.sqrt(Math.pow(lado2, 2)-(Math.pow(lado1, 2)/4));
    }
    else if (lado3 == lado1){
        return Math.sqrt(Math.pow(lado3, 2)-(Math.pow(lado2, 2)/4));
    }
    else{
        alert("pudrete!! sabes q eso no es un isoceles");}
}

//perimetro del circulo
function perimetroCirculo(radio){
    return 2 * Math.PI * radio;
}

//area del circulo
function areaCirculo(radio){
    return Math.PI * Math.pow(radio, 2); 
}

// Interactuando con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("lado_input");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("YEAH!! " + perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("lado_input");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}