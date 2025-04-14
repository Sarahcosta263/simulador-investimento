document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("simulador-form");
  const resultado = document.getElementById("resultado");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const valorInicial = parseFloat(document.getElementById("valor").value);
    const prazo = parseInt(document.getElementById("prazo").value);
    const taxaMensal = 0.01; // 1% ao mês

    if (isNaN(valorInicial) || isNaN(prazo) || valorInicial <= 0 || prazo <= 0) {
      resultado.innerHTML = `
        <div class="erro">Preencha todos os campos corretamente.</div>
      `;
      return;
    }

    let valorFinal = valorInicial * Math.pow((1 + taxaMensal), prazo);
    let ganho = valorFinal - valorInicial;

    resultado.innerHTML = `
      <div class="resultado-box">
        <h3>Resultado da Simulação</h3>
        <p><strong>Valor investido:</strong> R$ ${valorInicial.toFixed(2)}</p>
        <p><strong>Valor final:</strong> R$ ${valorFinal.toFixed(2)}</p>
        <p><strong>Ganho:</strong> R$ ${ganho.toFixed(2)}</p>
      </div>
    `;

    resultado.scrollIntoView({ behavior: "smooth" });
  });
});
