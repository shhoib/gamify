import React from 'react';
import Wave from 'react-wavify';

const WaveCircle = () => {
  return (
    <div className='relative xl:w-28 xl:h-28 md:h-24 md:w-24 lg:h-28 lg:w-28 h-16 w-16 overflow-hidden border-[1px] border-slate-400 rounded-full p-1'>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#02c7ff', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1990ff', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
      <div style={{ width: '100%', height: '100%', clipPath: 'circle(50%)' }}>
        <Wave
          fill="url(#waveGradient)"  
          options={{ points: 3, speed: 0.3, amplitude: 10, height:40 }}
          className="w-full h-full"
        />
      </div>
      <div className='absolute text-white left-0 top-0 w-full h-full font-semibold flex flex-col items-center pt-2 md:pt-3 lg:pt-4 xl:pt-5'>
      <h2 className='text-[9px] md:text-sm lg:text-base'>Active</h2>
      <h1 className='text-[11px] md:text-lg lg:text-xl '>43.1%</h1>
      </div>
    </div>
  );
};

export default WaveCircle;