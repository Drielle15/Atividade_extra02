var totalPessoas = 0;
var menores18 = 0;
var maiores65 = 0;
var entre18e65 = 0;
var masculino = 0;
var feminino = 0;

document.getElementById("formPessoa").addEventListener("submit", function(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var idade = parseInt(document.getElementById("idade").value);
    var sexo = document.getElementById("sexo").value;

    totalPessoas++;

    // contagem por idade
    if (idade < 18) {
        menores18++;
    } else if (idade > 65) {
        maiores65++;
    } else {
        entre18e65++;
    }

    // contagem por sexo
    if (sexo === "M") {
        masculino++;
    } else if (sexo === "F") {
        feminino++;
    }

    document.getElementById("mensagem").innerHTML =
        "Pessoa registrada: " + nome + " (" + idade + " anos, sexo " + sexo + ")";

    
    if (totalPessoas === 20) {
        document.getElementById("resultado").innerHTML =
            "a) Menores de 18 anos: " + menores18 + "<br>" +
            "b) Maiores de 65 anos: " + maiores65 + "<br>" +
            "c) Entre 18 e 65 anos: " + entre18e65 + "<br>" +
            "d) Sexo Masculino: " + masculino + "<br>" +
            "   Sexo Feminino: " + feminino;
    }
});
