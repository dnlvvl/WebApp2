import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const data = {
  labels,
  datasets: [
    {
      label: 'Доход',
      data: [20, 80, 60, 100, 120, 110, 150, 130, 180, 220, 260, 250],
      backgroundColor: '#1f1f20',
      borderRadius: 8,
    },
  ],
};

const options = {
  responsive: true,
  plugins: { legend: { display: false } },
  scales: {
    y: { grid: { color: '#efefef' }, ticks: { callback: (v: any)=> v + '%' } },
    x: { grid: { display: false } },
  },
};

export default function Analytics(){
  return (
    <div className="safe-area">
      <div className="card chart-card">
        <div className="chart-title">Общий доход</div>
        <div style={{marginTop:12}}>
          <Bar data={data} options={options as any} height={140} />
        </div>
      </div>
    </div>
  );
}