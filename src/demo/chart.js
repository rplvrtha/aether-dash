// src/aether.js

function createSalesChart() {
    const ctx = document.getElementById('salesChart');
    
    if (!ctx) {
        console.error("Elemen canvas dengan id 'salesChart' tidak ditemukan.");
        return;
    }

    // 3. Data untuk ditampilkan di chart
    const salesData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul"],
        datasets: [{
            label: 'Penjualan Bulanan',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            tension: 0.4, 
            fill: true,
            data: [65, 59, 80, 81, 56, 55, 40],
        }]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    new Chart(ctx, {
        type: 'line',
        data: salesData,
        options: chartOptions
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createSalesChart();
});