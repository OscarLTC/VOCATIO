import { Bar } from 'react-chartjs-2';
import './dashboard-five-enterprises.scss';
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Title,
} from 'chart.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { environment } from '../../../environments/environment';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Legend,
  Title,
  Legend
);

interface enterprise {
  id: number;
  name: string;
  amount: number;
}

/* eslint-disable-next-line */
export interface DashboardFiveEnterprisesProps {}

export function DashboardFiveEnterprises(props: DashboardFiveEnterprisesProps) {
  const [enterprises, setEnterprises] = useState<Array<enterprise>>();

  useEffect(() => {
    axios
      .get(`${environment.apiUrl}/enterprise/total`)
      .then((res) =>
        setEnterprises(
          res.data
            .sort((a: enterprise, b: enterprise) => b.amount - a.amount)
            .slice(0, 5)
        )
      );
  }, []);

  return (
    <div className="basis-2/4 bg-[#ffffff] w-full rounded-lg shadow flex flex-col p-2 overflow-auto">
      <h2 className="text-left font-bold">Top de empresas con más encuestas</h2>

      {enterprises ? (
        <div className="flex gap-7 items-center  mx-auto  h-60 w-[700px] ">
          <Bar
            width={500}
            className="p-3"
            data={{
              labels: enterprises?.map((e) => e.name),
              datasets: [
                {
                  label: 'Dataset 1',
                  data: enterprises?.map((e) => e.amount),
                  backgroundColor: [
                    '#B0C4DE',
                    '#C7E5C5',
                    '#FFDAB9',
                    '#E6E6FA',
                    '#FFFACD',
                  ],
                },
              ],
            }}
            options={{
              indexAxis: 'x' as const,
              scales: {
                x: {
                  beginAtZero: true,
                  ticks: {
                    font: {
                      size: 10,
                    },
                  },
                  grid: {
                    display: false,
                  },
                },
                y: {
                  ticks: {
                    font: {
                      size: 10,
                    },
                  },
                  grid: {
                    display: false,
                  },
                },
              },
              elements: {
                bar: {
                  borderWidth: 2,
                  borderRadius: {
                    topLeft: 10,
                    topRight: 10,
                  },
                },
              },
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
      ) : (
        <div className="w-full h-full pt-4 ">
          <div className="w-full h-full bg-slate-200 rounded animate-pulse"></div>
        </div>
      )}
    </div>
  );
}

export default DashboardFiveEnterprises;
