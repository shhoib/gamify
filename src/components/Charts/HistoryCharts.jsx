import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const HistoryCharts = () => {

    const [chartHeight, setChartHeight] = useState(calculateHeight(window.innerWidth));

  function calculateHeight(width) {
    if (width >= 1280) return 400; 
    if (width >= 768) return 300;  
    return 150;                    
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

  const series = [
    {
      name: 'Previous month',
      data: [1000, 3000, 1500, 2500, 1000, 3000, 1700],
    },
    {
      name: 'Selected month',
      data: [1200, 2300, 2200, 1700, 2200, 1500, 2500],
    },
  ];

  const options = {
    chart: {
      type: 'area',
      height: chartHeight,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ['#9333ea', '#e11d48'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        gradientToColors: ['#9333ea', '#e11d48'],
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0.8,
        stops: [0, 50, 100],
      },
    },
    xaxis: {
      categories: [1, 5, 10, 15, 20, 25, 30],
      tickAmount: 6,
      labels: {
        style: {
          colors: '#ffffff',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 4,
      labels: {
        style: {
          colors: '#ffffff',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `$${val}`;
        },
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      labels: {
        colors: '#ffffff',
      },
    },
    grid: {
      show: false,
      borderColor: '#444',
    },
  };

  return (
    <div className="bg-gray-900 p-2 md:p-3 lg:p-4 xl:p-6 rounded-lg shadow-lg w-full z-20">
      <div className="flex justify-between items-center text-white mb-4">
        <h2 className="text-xl font-semibold">Deposit History</h2>
        <div className="relative">
          <select className="bg-gray-800 text-white rounded-2xl p-2">
            <option>April 2021</option>
            <option>May 2021</option>
            <option>June 2021</option>
          </select>
        </div>
      </div>
      <Chart options={options} series={series} type="area" height={chartHeight} />
    </div>
  );
};

export default HistoryCharts;
