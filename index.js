const handleclick = () => {
    console.log("click");
};
var num1 = 3;
var num2 = 3;
function suma(num1, num2) {
    var sumado = parseInt(num1) + parseInt(num2);
    console.log(sumado);
}

function sumainput() {
    var resultado = document.getElementById("resultado");
    var numero1 = parseFloat(document.getElementById("input1").value);
    var numero2 = parseFloat(document.getElementById("input2").value);
    var sumado = numero1 + numero2;
    resultado.innerText = "resultado:" + sumado;
}
function video() {
    var video = document.getElementById("video2");
    var contenedor = document.getElementById("container");
}