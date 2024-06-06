function sumar() {
    var valor1 = parseFloat(document.getElementById('v1').value);
    var valor2 = parseFloat(document.getElementById('v2').value);
    var resultado = valor1 + valor2; 
    var h3=document.getElementById("res")
    h3.innerHTML=resultado
}
function restar(){
    var valor1 = parseFloat(document.getElementById('v1').value);
    var valor2 = parseFloat(document.getElementById('v2').value);
    var resultado = valor1 - valor2; 
    var h3=document.getElementById("res")
    h3.innerHTML=resultado
}
function multiplicar(){
    var valor1 = parseFloat(document.getElementById('v1').value);
    var valor2 = parseFloat(document.getElementById('v2').value);
    var resultado = valor1 * valor2; 
    var h3=document.getElementById("res")
    h3.innerHTML=resultado
}
function divicion(){
    var valor1 = parseFloat(document.getElementById('v1').value);
    var valor2 = parseFloat(document.getElementById('v2').value);
    var resultado = valor1 / valor2; 
    var h3=document.getElementById("res")
    h3.innerHTML=resultado
}