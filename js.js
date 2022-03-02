//perimetro del cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
}

// area del cuadrado
function areaCuadrado(lado){
    return lado * lado;
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

//perimetro del triangulo
function perimetroTriangulo(lados, base){
    return (lados * 2) + base;
}

//area del triangulo
function areaTriangulo(base, altura){
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

// Interactuando con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("lado_input");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    if (value != ''){
        alert("YEAH!! " + perimetro.toFixed(2) + "cm");
    }
}
function calcularAreaCuadrado(){
    const input = document.getElementById("lado_input");
    const value = input.value;
    const area = areaCuadrado(value);
    if (value != ''){
        alert("YEAH!!" + area.toFixed(2) + "cm");
    }
}
function calcularPerimetroTriangulo(){
    const lados_input = document.getElementById("lados");
    const lados = parseInt(lados_input.value);
    const base_input = document.getElementById("base");
    const base = parseInt(base_input.value);
    const perimetro = perimetroTriangulo(lados, base);
    if (lados != '' && base != ''){
        alert("YEAH!! " + perimetro + "cm");
    }
}
function calcularAreaTriangulo(){
    const lados_input = document.getElementById("lados");
    const lados = lados_input.value;
    const base_input = document.getElementById("base");
    const base = base_input.value;
    const altura = alturaTriangulo(lados, lados, base)
    const area = areaTriangulo(base, altura);
    if (lados != '' && base != ''){
        alert("YEAH!! " + area.toFixed(2) + "cm");
    }
}
function calcularPerimetroCirculo(){
    const radio_input = document.getElementById("radio");
    const radio = radio_input.value;
    const perimetro = perimetroCirculo(radio);
    if (radio != ''){
        alert("YEAH!! " + perimetro.toFixed(2) + "cm");
    }
}
function calcularAreaCirculo(){
    const radio_input = document.getElementById("radio");
    const radio = radio_input.value;
    const area = areaCirculo(radio);
    if (radio != ''){
        alert("YEAH!! " + area.toFixed(2) + "cm");
    }
}