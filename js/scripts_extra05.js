var total = 0;
var somaSalarioHomens = 0;
var qtdHomens = 0;
var mulheresEntre1000e3000 = 0;
var homensSalario2000 = 0;
var mulheresSalario2000 = 0;

document.getElementById("formPesquisa").addEventListener("submit", function(event) {
    event.preventDefault();

    var idade = parseInt(document.getElementById("idade").value);
    var sexo = document.getElementById("sexo").value;
    var renda = parseFloat(document.getElementById("renda").value);

    total++;

    if (sexo === "M") {
        qtdHomens++;
        somaSalarioHomens += renda;
        if (renda >= 2000) {
            homensSalario2000++;
        }
    } else if (sexo === "F") {
        if (renda >= 1000 && renda <= 3000) {
            mulheresEntre1000e3000++;
        }
        if (renda >= 2000) {
            mulheresSalario2000++;
        }
    }

    document.getElementById("mensagem").innerHTML =
        "Pessoa registrada: Idade " + idade + ", Sexo " + sexo + ", Renda R$ " + renda.toFixed(2);


    var mediaHomens = qtdHomens > 0 ? (somaSalarioHomens / qtdHomens).toFixed(2) : 0;
    var percHomens2000 = qtdHomens > 0 ? ((homensSalario2000 / qtdHomens) * 100).toFixed(2) : 0;
    var percMulheres2000 = (total - qtdHomens) > 0 ? ((mulheresSalario2000 / (total - qtdHomens)) * 100).toFixed(2) : 0;

    document.getElementById("resultado").innerHTML =
        "a) Total de pessoas digitadas: " + total + "<br>" +
        "b) Média de salário dos homens: R$ " + mediaHomens + "<br>" +
        "c) Mulheres com renda entre R$1000 e R$3000: " + mulheresEntre1000e3000 + "<br>" +
        "d) Percentual de homens com salário >= R$2000: " + percHomens2000 + "%<br>" +
        "   Percentual de mulheres com salário >= R$2000: " + percMulheres2000 + "%";
});
