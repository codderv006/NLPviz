import React from 'react';
import { Bar } from 'react-chartjs-2'; // Import the correct chart type
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TFIDFPage = () => {
  const data = {
    labels: ['Word1', 'Word2', 'Word3'],
    datasets: [
      {
        label: 'TF-IDF Scores',
        data: [0.5, 0.8, 0.2],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div>
      <h1>TF-IDF Visualization</h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TFIDFPage;
