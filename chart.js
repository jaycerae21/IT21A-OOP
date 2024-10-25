const DATA_COUNT = 7;
const labels = ['M3gan', 'The LEGO Movie', 'Dune: Part Two', 'Monkey man', 'The Idea Of You', 'June Zero', 'Long legs'];

const data = {
    labels: labels,
    datasets: [
        {
            label: 'Female',
            data: [40, 50, 38, 37, 41, 38,],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
        },
        {
            label: 'Male',
            data: [41, 32, 42, 50, 38, 45, 40],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
        }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Famous Movies'
            }
        },
        scales: {
            y: {
                suggestedMin: 30,
                suggestedMax: 50,
            }
        }
    },
};

const myChart = new Chart( document.getElementById('myChart'), config
);