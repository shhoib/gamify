import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
 
const EarningsChart = () => {

    const [chartHeight, setChartHeight] = useState(calculateHeight(window.innerWidth));

    function calculateHeight(width) {
      if (width >= 1280) return 150; 
      if (width >= 768) return 140;  
      return 100;                    
    }
  
    useEffect(() => {
      const handleResize = () => {
        setChartHeight(calculateHeight(window.innerWidth));
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const chartOptions = {
        chart: {
            id: 'earnings-chart',
            toolbar: { show: false },
            zoom: { enabled: false },
            animations: { enabled: true },
            background: 'transparent',
        },
        stroke: {
            curve: 'smooth',
            width: 2,
            colors: ['#fed803'], // Yellow color
        },
        grid: { show: false },
        xaxis: {
            labels: { show: false },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: { show: false },
        tooltip: { enabled: false },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'vertical',
                gradientToColors: ['#eab308'],
                stops: [0, 100],
                opacityFrom: 0.5,
                opacityTo: 0,
            },
        },
    };
 
    const chartSeries = [
        {
            name: 'Earnings',
            data: [140, 40, 110, 50, 150, 60, 120, 91, 160],
        },
    ];
 
    return (
        <div className="flex items-center justify-center xl:h-full h-40 md:h-72 lg:h-80">
            <div className="bg-[#141c27] rounded-lg py-3 md:p-6 shadow-lg h-full w-full">
                <div className="text-center md:mt-3">
                    <p className="text-gray-400 text-[8px] md:text-xs xl:text-sm">Expected earnings</p>
                    <h2 className="text-sm md:text-xl md:mt-1 lg:mt-2 lg:text-2xl xl:text-3xl font-bold text-white">$2682.5</h2>
                    <div className="mt-1 md:mt-2 xl:mt-3 bg-yellow-400 rounded-full inline-block p-1 px-2 xl:p-2 xl:px-4 text-[7px] md:text-xs font-semibold text-gray-900">
                        +2.45%
                    </div>
                </div>
                <div className="xl:mt-6">
                    <Chart options={chartOptions} series={chartSeries} type="line" height={chartHeight} />
                </div>
            </div>
        </div>
    );
};
 
export default EarningsChart;