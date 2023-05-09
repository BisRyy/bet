// components
import Chart, { useChart } from '../../../../components/chart';

// ----------------------------------------------------------------------

const series = [
  { name: 'Net Profit', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] },
  { name: 'Revenue', data: [76, 85, 101, 98, 87, 105, 91, 114, 94] },
];

export default function ChartColumnMultiple() {
  const chartOptions = useChart({
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    tooltip: {
      y: {
        formatter: (value) => `$ ${value} thousands`,
      },
    },
    plotOptions: { bar: { columnWidth: '36%' } },
  });

  return <Chart type="bar" series={series} options={chartOptions} height={320} />;
}
