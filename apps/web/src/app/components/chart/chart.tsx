import './chart.scss';
import { useEffect, useState, useRef } from 'react';

import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, registerables } from 'chart.js';

ChartJS.register(LinearScale, ...registerables);

const data = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
  datasets: [
    {
      label: 'Ventas',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

/* eslint-disable-next-line */
export interface ChartProps {}

export function Chart(props: ChartProps) {
  const chartRef = useRef(null);
  const [imageURL, setImageURL] = useState('');

  const generate = () => {
    const chart: any = chartRef.current;

    if (chart) {
      const imageBase64 = chart.toBase64Image();
      setImageURL(imageBase64);
    }
  };

  return (
    <div>
      <img src={imageURL} alt="" />
      <h2>Ventas por mes</h2>

      <Bar
        ref={chartRef}
        data={data}
        options={{
          scales: {
            y: {
              min: 10,
            },
          },
          animation: {
            onComplete: generate,
          },
        }}
      />
    </div>
  );
}

export default Chart;
