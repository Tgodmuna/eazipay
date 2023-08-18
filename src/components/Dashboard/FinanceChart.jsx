import React from "react";
import Chart from "chart.js/auto";

const FinanceChart = () => {
  // Ref to hold the canvas element
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    // Data for the chart
    const data = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          data: [10,20,50,30,90,60,70,80,100,45,50,25],
          borderColor: "black",
          borderWidth: 5,
          pointRadius: 10,
          pointHoverRadius: 2,
          pointBackgroundColor: "green",
        },
      ],
    };

    // Options for the chart
    const options = {
      scales: {
        x: {
          ticks: {
            maxRotation: 0,
            autoSkip: true,
            maxTicksLimit: 12,
            font: {
              size: 14,
            },
          },
        },
        y: {
          ticks: {
            display: true,
            callback: function (value, index, values) {
              if (value === 0) return "Center";
              return value;
            },
            padding: 10,
            grid: {
              color: "blue", 
              borderWidth:10, 
            },
          },
        },
      },

      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            title: function (context) {
              return "Month: " + context[0].label;
            },
            label: function (context) {
              return "Value: " + context.parsed.y;
            },
          },
        },
      },
    };

    const myChart = new Chart(chartRef.current, {
      type: "line",
      data: data,
      options: options,
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className='w-[] md:w-[60vw] mx-auto bg-gray-100 border rounded-2xl md:mt-[3rem] md:p-[4rem] '>
      <div className='rounded-t mb-0 sm:px-4 md:px-6 pt-[3rem] bg-transparent flex flex-col-reverse md:relative md:left-[3rem] md:grid md:grid-cols-3 items-center justify-between'>
        <div className='flex justify-between gap-2 md:gap-4 w-full items-center md:col-span-2'>
          <div className='text-left'>
            <span className='text-xl   font-medium text-gray-300  '>
              Inflow
            </span>
            <h2 className='text-xl sm:text-2xl md:text-3xl text-success font-bold text-green-400'>
              ₦0.00
            </h2>
          </div>
          <div className='text-left'>
            <span className='text-xl text-gray-300 font-medium text-dark-600'>
              Outflow
            </span>
            <h2 className='text-xl  sm:text-2xl md:text-3xl text-secondary font-bold  text-red-400'>
              ₦0.00
            </h2>
          </div>
        </div>
        <div className='md:col-span-1 flex justify-center md:justify-end'>
          <div className='relative w-40 group mb-6 md:mb-0'>
            <div className='text-xl text-gray-300 flex justify-end items-center gap-2 cursor-pointer px-2'>
              Inflow &amp; Outflow <i className='fas fa-angle-right'></i>
            </div>
            <div
              className='flex z-20 flex-col bg-white shadow-md absolute w-36 md:w-40 text-sm left-0 md:-left-24'
              style={{ display: "none" }}>
              <div className='bg-primary text-white hover:bg-slate-500 py-2 px-3 hover:text-primary cursor-pointer transition ease-in-out'>
                Inflow/Outflow
              </div>
              <div className='hover:bg-slate-500 py-2 px-3 hover:text-primary cursor-pointer transition ease-in-out'>
                Inflow
              </div>
              <div className='hover:bg-slate-500 py-2 px-3 hover:text-primary cursor-pointer transition ease-in-out'>
                Outflow
              </div>
            </div>
          </div>
        </div>
        <div className='pointer-events-none bg-transparent fixed inset-0'></div>
      </div>
      <div className='w-full md:w-full mx-auto'>
        <canvas ref={chartRef} style={{ width: "100vw" }}></canvas>
      </div>{" "}
    </div>
  );
};

export default FinanceChart;
