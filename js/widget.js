// alert banner

const alertBanner = document.getElementById("alert");
// create the html for the banner
alertBanner.innerHTML =
`
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>
`
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alert.style.display = "none"
    }
});

// Line Graph

let trafficCanvas = document.getElementById("traffic-chart");

let trafficData = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3","4-10", "11-17", "18-24", "25-31"],
        datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 2000, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficOptions = {
    aspectRatio: 2.5,
        animation: {
            duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
        }
      }]
    },
    legend : {
        display: false
    }
};

let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
});


// Bar Graph

const dailyCanvas = document.getElementById("daily-chart");
