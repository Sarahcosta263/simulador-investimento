document.getElementById('investment-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const initial = parseFloat(document.getElementById('initial').value);
  const monthly = parseFloat(document.getElementById('monthly').value);
  const rate = parseFloat(document.getElementById('rate').value) / 100;
  const months = parseInt(document.getElementById('months').value);

  let total = initial;
  let invested = initial;
  const labels = [];
  const data = [];

  for (let i = 1; i <= months; i++) {
    total = (total + monthly) * (1 + rate);
    invested += monthly;
    labels.push(`Mês ${i}`);
    data.push(total.toFixed(2));
  }

  const interest = total - invested;

  document.getElementById('final-amount').innerText = total.toFixed(2);
  document.getElementById('total-invested').innerText = invested.toFixed(2);
  document.getElementById('total-interest').innerText = interest.toFixed(2);

  renderChart(labels, data);
});

let chartInstance = null;
function renderChart(labels, data) {
  const ctx = document.getElementById('chart').getContext('2d');
  if (chartInstance) chartInstance.destroy();
  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Evolução do Investimento',
        data: data,
        borderColor: '#27ae60',
        backgroundColor: 'rgba(39, 174, 96, 0.2)',
        borderWidth: 2,
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
