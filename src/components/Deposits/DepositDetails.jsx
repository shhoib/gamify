import React from 'react'
import LocationNav from '../LocationNav'

const DepositDetails = () => {
  return (
    <div>
     <LocationNav text='Gamblify requested' />

     <div className='md:flex gap-4 lg:gap-5 xl:gap-6 mt-3 md:mt-4 lg:mt-5 xl:mt-6'>
        <div className='w-full md:w-[35%] bg-Cbg p-3 md:p-4 lg:p-5 xl:p-8 rounded-xl'>
            <h1 className='xl:text-2xl text-white'>Deposit Via BTC</h1>
            <div className='flex justify-between text-[7px] md:text-[11px] lg:text-xs xl:text-base gap-2 mt-3 mdLmt-4 lg:mt-5 xl:mt-6'>
                    <div>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5'>Username</h2>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5'>Date</h2>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5'>Method</h2>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5'>Amount</h2>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5'>Total</h2>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5'>Rate</h2>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5'>Status</h2>
                    </div>
                    <div className='text-end text-white'>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5'>Gamblify</h2>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5'>10,feb,2024 10:43 PM</h2>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5'>BTC</h2>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5'>0.01</h2>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5'>0.01</h2>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5'>1 BTC = $70,1130</h2>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5 text-lGreen'>APPROVED</h2>
                    </div>
             </div>
        </div>
        <div className='w-full md:w-[65%] bg-Cbg p-3 md:p-4 lg:p-5 xl:p-8 rounded-xl'>
            <h1 className='xl:text-2xl text-white'>User Deposit Information</h1>
            <div className='xl:mt-10'>
            <h2 className='text-white mb-1 xl:mb-2'>Txid</h2>
            <h2>3acje83659sndidq73nwET3w5gsd@DG473456sdsdgRHAS</h2>
            </div>

            <div className='xl:mt-8'>
                <h2 className='text-white mb-1 xl:mb-2'>EtherScan</h2>
                <h2>https://etherscan.io/tx/0x85627610159f4ae3053b2f5245f27ddd8e704ba13f7bbe5c1465debd67900906</h2>
            </div>
        </div>
     </div>
     
    </div>
  )
}

export default DepositDetails