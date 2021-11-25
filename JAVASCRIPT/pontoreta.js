function limpar() {
    document.getElementById("A").value = "";
    document.getElementById("B").value = "";
    document.getElementById("C").value = "";
    document.getElementById("x").value = "";
    document.getElementById("y").value = "";
    document.getElementById("display").value = "";
}

function calcularpontoereta() {
    var A = Number(document.getElementById("A").value)
    var B = Number(document.getElementById("B").value)
    var C = Number(document.getElementById("C").value)
    var x = Number(document.getElementById("x").value)
    var y = Number(document.getElementById("y").value)

    var primeira = A * x + B * y + C
    var segunda = primeira / Math.sqrt(A ^ 2 + B ^ 2)
    document.getElementById("display").value = segunda.toFixed(2);
}