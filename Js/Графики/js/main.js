//Задача о потере веса

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Cлон', 'Кот', 'Cобака'],
        datasets: [{
            label: 'Вес зверей',
            backgroundColor: 'rgb(255, 99, 23)',
            borderColor: 'rgb(255, 99, 132)',
            data: [100, 8, 20]
        }]
    },

    // Configuration options go here
    options: {}
});