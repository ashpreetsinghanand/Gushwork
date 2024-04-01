import React from 'react'


const Dashboard = () => {
  
  return (
    <div className='flex flex-col mx-16'>
      <div className='flex gap-x-5 w-full'>
        <div className='w-1/4'>
          <div className='flex flex-col bg-slate-50 rounded-xl shadow-lg border-gray-200 border px-5 py-3 '>
            <div>🟢</div>
            <div className='font-[500] text-md'>Total Revenues</div>
            <div className='flex justify-between'>
              <div className='text-xl font-[500]'>$2,129,430</div>
              <div className='text-green-500 bg-green-100 p-2 rounded-3xl text-sm'>+2.15%</div>
            </div>
          </div>
        </div>
        <div className='w-1/4'><div className='flex flex-col bg-slate-50 rounded-xl shadow-lg border-gray-200 border px-5 py-3 '>
            <div>🟢</div>
            <div className='font-[500] text-md'>Total Transactions</div>
            <div className='flex justify-between'>
              <div className='text-xl font-[500]'>$1,520</div>
              <div className='text-green-500 bg-green-100 p-2 rounded-3xl text-sm'>+1.75%</div>
            </div>
          </div></div>
        <div className='w-1/4'><div className='flex flex-col bg-slate-50 rounded-xl shadow-lg border-gray-200 border px-5 py-3 '>
            <div>🟢</div>
            <div className='font-[500] text-md'>Total Likes</div>
            <div className='flex justify-between'>
              <div className='text-xl font-[500]'>9721</div>
              <div className='text-green-500 bg-green-100 p-2 rounded-3xl text-sm'>+1.4%</div>
            </div>
          </div></div>
        <div className='w-1/4'><div className='flex flex-col bg-slate-50 rounded-xl shadow-lg border-gray-200 border px-5 py-3 '>
            <div>🟢</div>
            <div className='font-[500] text-md'>Total Likes</div>
            <div className='flex justify-between'>
              <div className='text-xl font-[500]'>9721</div>
              <div className='text-green-500 bg-green-100 p-2 rounded-3xl text-sm'>+4.2%</div>
            </div>
          </div></div>
      </div>
    </div>
  )
}

export default Dashboard;