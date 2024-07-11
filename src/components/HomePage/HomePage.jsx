import React, { useState, useEffect } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import UserCard from '../Cards/UserCard';
import { FaUsers, FaUserCheck, FaUserTimes } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { HiMiniWallet } from "react-icons/hi2";
import SimpleCard from '../Cards/SimpleCard';
import HistoryCharts from '../Charts/HistoryCharts';
import WaveCircle from '../WaveCircle/WaveCircle';
import EarningsChart from '../Charts/EarningsChart';

const HomePage = () => {

  const [isXL, setIsXL] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsXL(window.innerWidth >= 1280);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    // <Sidebar>
    //   <Navbar />
    //   <div className='p-3 xl:p-7 ml-[12%] md:ml-[8%] xl:ml-[5%]'>
      <div>
        <div className='md:flex gap-2 md:gap-3 lg:gap-4 xl:gap-5'>

          <div className='w-full xl:w-[80%] flex flex-col gap-3 md:gap-4 lg:gap-5 xl:gap-7'>
            <div className='w-full flex gap-1 md:gap-2 lg:gap-3 xl:gap-5'>
              <div className='w-[33%] xl:w-[28%] '><UserCard color='#4ee2b5' heading='55555' text='Total Users' icon={<FaUsers />} /></div>
              <div className='w-[33%] xl:w-[28%] '><UserCard color='#a178f1' heading='55555' text='Total Verified Users' icon={<FaUserCheck />} /></div>
              <div className='w-[33%] xl:w-[28%] '><UserCard color='#2fc9ff' heading='55555' text='Total Unverified Users' icon={<FaUserTimes />} /></div>
              {isXL && (
                <div className='w-[16%] flex items-center justify-center'>
                  <WaveCircle />
                </div>
              )}
            </div>

            <div className='xl:flex gap-5'>
              <div className='w-full xl:w-[56%] flex justify-center gap-1 md:gap-3 xl:gap-5'>

                <div className='flex flex-col gap-3 md:gap-4 lg:gap-5 xl:gap-7 w-[66%] xl:w-full'>
                  <div className='flex gap-1 md:gap-2 xl:gap-5'>
                    <div className='w-[50%] xl:w-[50%] '><UserCard color='#78ff48' heading='55555' text='Pending Deposits' icon={<GiWallet />} /></div>
                    <div className='w-[50%] xl:w-[50%] '><UserCard color='#ff813a' heading='55555' text='Pending Withdrawals' icon={<HiMiniWallet />} /></div>
                  </div>

                  <div className='flex gap-1 md:gap-2 xl:gap-5'>
                    <div className='w-[50%] xl:w-[50%] '><SimpleCard text='Deposite' color='#78ff48' /></div>
                    <div className='w-[50%] xl:w-[50%] '><SimpleCard text='Withdrawal' color='#ff813a' /></div>
                  </div>
                </div>
                {!isXL && (
                  <div className='w-[33%] flex justify-center h-16 md:24 lg:h-28'>
                    <WaveCircle />
                  </div>
                )}
              </div>
              
              <div className='mt-3 xl:mt-0 flex gap-2 md:gap-3 xl:gap-4 xl:w-[44%]'>
              <div className='w-1/2 xl:w-full '><EarningsChart/></div>
              <div className='bg-red-900 xl:hidden w-1/2'>growth graph</div>
              </div>
            </div>
          </div>

          <div className='w-[20%] bg-red-700 hidden xl:flex'>growth graph</div>
        </div>

        <div className='w-full xl:w-[80%]'>
          <div className='mt-3 xl:mt-9 z-10'>
            <HistoryCharts />
          </div>
          <div className='mt-3 xl:mt-9 z-10'>
            <HistoryCharts />
          </div>
        </div>
        </div>
    //   </div>
    // </Sidebar>
  );
};

export default HomePage;
