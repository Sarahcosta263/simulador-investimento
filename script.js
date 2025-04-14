document.getElementById("simulatorForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const valor = parseFloat(document.getElementById("valor").value);
  const prazo = parseInt(document.getElementById("prazo").value);
  const juros = 0.008; // 0.8% ao mês

  const montante = valor * Math.pow((1 + juros), prazo);
  const resultado = `Ao final de ${prazo} meses, você terá aproximadamente R$ ${montante.toFixed(2).replace('.', ',')}`;

  document.getElementById("resultado").textContent = resultado;
});
