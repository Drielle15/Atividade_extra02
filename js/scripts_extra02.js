document.getElementById("formDivisores").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var numero = parseInt(document.getElementById("numero").value);
    var divisores = [];

    
    for (var i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    document.getElementById("resultado").innerHTML =
        "Os divisores de " + numero + " são: " + divisores.join(", ");
});
