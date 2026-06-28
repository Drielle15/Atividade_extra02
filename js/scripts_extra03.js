var totalPessoas = 0;
var podeDoar = 0;
var naoPodeDoar = 0;

document.getElementById("formPessoa").addEventListener("submit", function(event) {
    event.preventDefault();

    var idade = parseInt(document.getElementById("idade").value);
    var peso = parseFloat(document.getElementById("peso").value);

    totalPessoas++;

    if (idade >= 18 && idade <= 60 && peso > 50) {
        document.getElementById("mensagem").innerHTML = "✅ Poderá doar sangue.";
        podeDoar++;
    } else {
        document.getElementById("mensagem").innerHTML = "❌ Não poderá doar sangue.";
        naoPodeDoar++;
    }

    
    if (totalPessoas === 12) {
        document.getElementById("resultado").innerHTML =
            "Total que podem doar: " + podeDoar + "<br>" +
            "Total que não podem doar: " + naoPodeDoar;
    }
});
