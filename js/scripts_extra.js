function contarDivisiveis() {
    var contador = 0;

    // percorre de 1 até 1000
    for (var i = 1; i <= 1000; i++) {
        if (i % 7 === 0) {
            contador++;
        }
    }

    document.getElementById("resultado").innerHTML =
        "Existem " + contador + " números entre 1 e 1000 que são divisíveis por 7.";
}
